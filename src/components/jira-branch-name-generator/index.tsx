import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { formatDistanceToNow } from "date-fns";
import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  GitBranch,
  GitCommit,
  Inbox,
  Trash2
} from "lucide-react";

interface HistoryItem {
  initials: string;
  jiraNumber: string;
  jiraName: string;
  timestamp: string;
  branchName: string;
  commitMessage: string;
}

const FormSchema = z.object({
  initials: z.string().min(2, {
    message: "User Initials must be at least 2 characters.",
  }),
  jiraNumber: z
    .string()
    .min(2, {
      message: "Jira Number must be at least 2 characters.",
    })
    .regex(/^[A-Za-z]+-\d+$/, {
      message: "Jira Number must be in ABC-123 format.",
    }),
  jiraName: z.string().min(2, {
    message: "jiraName must be at least 2 characters.",
  }),
});

const JiraBranchNameGenerator: React.FC = () => {
  const [history, setHistory] = useState<HistoryItem[]>(
    JSON.parse(localStorage.getItem("jb-history") || "[]")
  );

  const [savedInitials, setSavedInitials] = useState(
    localStorage.getItem("jb-initials")
  );

  const [savedJiraNumber, setSavedJiraNumber] = useState(
    localStorage.getItem("jb-savedJiraNumber")
  );

  const [savedJiraName, setSavedJiraName] = useState(
    localStorage.getItem("jb-savedJiraName")
  );

  const { toast } = useToast();

  const saveToLocalStorage = (
    historyArray: HistoryItem[],
    initials?: string,
    jiraNumber?: string,
    jiraName?: string
  ) => {
    localStorage.setItem("jb-history", JSON.stringify(historyArray));

    initials && localStorage.setItem("jb-initials", initials);
    jiraNumber && localStorage.setItem("jb-savedJiraNumber", jiraNumber);
    jiraName && localStorage.setItem("jb-savedJiraName", jiraName);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: "Copied to clipboard" });
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      initials: savedInitials || "",
      jiraNumber: savedJiraNumber || "",
      jiraName: savedJiraName || "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const formattedJiraNumber = data.jiraNumber.trim().toUpperCase();
    const formattedJiraName = data.jiraName.trim();
    const formattedInitials = data.initials.trim().toLowerCase();

    const branchName = `${formattedInitials}-${formattedJiraNumber}-${formattedJiraName.replace(
      /\s+/g,
      "-"
    )}`;
    const commitMessage = `${formattedJiraNumber} - ${formattedJiraName}`;
    const { initials, jiraName, jiraNumber } = data;
    const timestamp = new Date().toISOString();

    const newHistory: HistoryItem[] = [
      ...history,
      { initials, jiraName, jiraNumber, branchName, timestamp, commitMessage },
    ];

    setHistory(newHistory);
    setSavedInitials(initials);
    setSavedJiraName(jiraName);
    setSavedJiraNumber(jiraNumber);
    saveToLocalStorage(newHistory, initials, jiraNumber, jiraName);
    toast({
      title: `${jiraNumber.toUpperCase()} Generated Successfully`,
      description: "Branch Name and commit message generated successfully.",
    });
  }

  function deleteItem(item: HistoryItem): void {
    const newHistory: HistoryItem[] = [...history];
    newHistory.splice(
      newHistory.findIndex((i) => i.timestamp === item.timestamp),
      1
    );
    setHistory(newHistory);
    saveToLocalStorage(newHistory);
    toast({
      title: `Deleted Successfully`,
    })
  }

  return (
    <div className="container mx-auto px-4">
      <div className="mx-auto">
        <h2 className="text-2xl font-bold my-8">Jira Branch Name Generator</h2>
        <div className="grid lg:grid-cols-2 relative gap-4 mb-10 ">
          <div className="top-0 lg:sticky lg:h-screen">
            <Card>
              <CardHeader>
                <CardTitle>Create New</CardTitle>
                <CardDescription>
                  Create branch name and Commit message from new jira
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="initials"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>User Initials</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name initials (eg. vz)"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="jiraNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Jira Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Jira Number (eg. cx-111)"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="jiraName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Jira Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Jira name (eg. Create an api endpoint)"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Generate</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Conversion History</CardTitle>
              <CardDescription>Recent conversions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {history.length === 0 && (
                <div className="items-center justify-center flex flex-col p-10">
                  <Inbox size={100} strokeWidth={1} />
                  <span className="text-xl">Nothing in history</span>
                  <p className="opacity-70">
                    Generate new branch name to get started!
                  </p>
                </div>
              )}
              {history
                .sort(
                  (a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp)
                )
                .map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-xl flex justify-between">
                        {item?.jiraNumber?.toUpperCase() ||
                          item?.jiraName ||
                          "Jira"}
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant={"ghost"}>
                              <Trash2 className="opacity-60" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Are you absolutely sure?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will
                                permanently delete this item from history.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => deleteItem(item)}
                              >
                                Continue
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </CardTitle>
                      <CardDescription>
                        {formatDistanceToNow(new Date(item?.timestamp), {
                          addSuffix: true,
                        })}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3">
                      <p>
                        <span className="font-semibold">Branch Name:</span>{" "}
                        {item.branchName}
                      </p>
                      <p>
                        <span className="font-semibold">Commit Message:</span>{" "}
                        {item.commitMessage}
                      </p>
                    </CardContent>
                    <CardFooter className="gap-2 flex-col md:flex-row flex">
                      <Button
                        className="w-full gap-2"
                        variant={"outline"}
                        onClick={() => copyToClipboard(item.branchName)}
                      >
                        <GitBranch />
                        Copy Branch Name
                      </Button>
                      <Button
                        variant={"outline"}
                        className="w-full gap-2"
                        onClick={() => copyToClipboard(item.commitMessage)}
                      >
                        <GitCommit />
                        Copy Commit Message
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JiraBranchNameGenerator;
