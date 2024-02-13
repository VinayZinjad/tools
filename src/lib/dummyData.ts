import { faker } from "@faker-js/faker";
const partNumbers = [
  "CR2032",
  "SDSDQAF3-016G-XI",
  "CC0603KRX7R9BB102",
  "GRM188R60J106ME84D",
  "CC0603KPX7R9BB104",
  "06035C103JAT2A",
  "TMK107BJ105KA-T",
  "CL05B103KB5NNNC",
  "06035A150FAT2A",
  "GRM188R6YA225KA12D",
  "0603N8R0D500CT",
  "TMK107BJ105KA-T",
  "GRM155R61E104KA87D",
  "CL10A475KA8NQNC",
  "EEE-HA1H221P",
  "CL10A105KB8NNNC",
  "UMK325BJ106MM-T",
  "GRM188R71E474KA12D",
  "293D106X0016A2TE3",
  "TAJC157K010RNJ",
  "C0603C101K5RACTU",
  "UMK105BJ224KV-F",
  "T495X476M035ATE300",
  "T491A476M006AT",
  "F930J107MBA",
  "Any",
  "SD107WS-7-F",
  "ESD3V3D5-TP",
  "SMBJ26CA-13-F",
  "B340LA-13-F",
  "ZHCS400TA",
  "BZT52C10-7-F",
  "B340LA-13-F",
  "0451003.MRL",
  "045106.3MRL",
  "0451.500NRL",
  "DF13-4P-1.25DSA(50)",
  "DF13-5P-1.25DSA",
  "70543-0001",
  "54132-4062",
  "501645-1820",
  "70553-0002",
  "70543-0037",
  "DF13EA-10DP-1.25V(51)",
  "BS-7",
  "3220-20-0100-00",
  "430450812",
  "DF13-3P-1.25DSA",
  "70543-0005",
  "DM3CS-SF",
  "70543-0004",
  "DF13-2P-1.25DSA",
  "70543-0006",
  "70543-0003",
  "43045-0420",
  "87831-1420",
  "75102-0082",
  "SRR1210-470M",
  "CDRH127NP-150MC",
  "BLM18KG601SN1D",
  "BK1608LM751-T",
  "BK1608LM751-T",
  "SRR1210-102M",
  "QBLP601-R",
  "QBLP601-O",
  "QBLP601-Y",
  "QBLP601-AG",
  "QBLP601-IB",
  "ASV-25.000MHZ-EJ-T",
  "ZXMN7A11GTA",
  "ZXMN6A07F",
  "SQD50P04-13L_GE3",
  "ZXMP10A17GQTA",
  "DMP3056LDM-7",
  "ZXT10P40DE6TA",
  "ERJ-3GEYJ153V",
  "ERJ-3GEYJ103V",
  "RMCF0603JT1K00",
  "ERJ-3GEYJ104V",
  "ERJ-3GEYJ271V",
  "ERJ-3EKF1200V",
  "RC0603FR-073K16L",
  "ERJ-3EKF2701V",
  "ERJ-3EKF3901V",
  "ERJ-3GEYJ223V",
  "ERJ-3EKF75R0V",
  "ERJ-3EKF22R0V",
  "RC0603FR-071KL",
  "ERJ-3GEYJ105V",
  "ERJ-3EKF10R0V",
  "ERJ-3GEY0R00V",
  "ERJ-6GEYJ472V",
  "ERJ-3GEYJ104V",
  "RC0603JR-07680RL",
  "RC0402JR-0722RL",
  "RC0603FR-07200KL",
  "RC0603FR-073K74L",
  "RC0603FR-0710KL",
  "ERJ-8CWFR033V",
  "RC0603FR-0752K3L",
  "N/A - not populated",
  "ERJ-3EKF3002V",
  "ERJ-8CWFR030V",
  "ERJ-3EKF1003V",
  "ERJ-3GEYJ471V",
  "RC0603FR-0731K6L",
  "RC0603FR-0769K8L",
  "RC0603FR-07100RL",
  "ERJ-3EKF6201V",
  "ERJ-3EKF4702V",
  "ERJ-3EKF9102V",
  "ERJ-3EKF7501V",
  "ERJ-3GEYJ472V",
  "CRCW20100000Z0EF",
  "ERJ-3GEYJ333V",
  "RC0603FR-076K19L",
  "ERJ-8BQFR30V",
  "ERJ-3GEY0R00V",
  "KRL1632E-M-R150-F-T5",
  "ERJ-3GEYJ331V",
  "ERJ-3GEYJ203V",
  "RC0603FR-077K5L",
  "B57321V2103J060",
  "EVQ-P2F02K",
  "A6H-4101",
  "SN74LVC1G3157DBVR",
  "5015",
  "5011",
  "5117",
  "5002",
  "5004",
  "5010",
  "TS4990IST",
  "TLV271IDBVR",
  "STM32F407VET6TR",
  "MCP102T-270E/TT",
  "MC74LCX14DTR2G",
  "TLC59116IRHBR",
  "STM32F777NIH6",
  "MCP102T-195I/TT",
  "IS42S16320F-7BL",
  "MC33161DR2G",
  "LTC3864EMSE#PBF",
  "ST3232CDR",
  "FSUSB42MUX",
  "USBLC6-2SC6",
  "AD5592RBRUZ",
  "AD623ARZ-RL",
  "AD8607ARZ",
  "MIC39101-5.0YM",
  "SN74LVC1G332DCKR",
  "LM3526M-H",
  "AD8217BRMZ",
  "MCP23S17-E/SS",
  "SN74CB3Q3305PWR",
  "SN74LVC2T45DCUR",
  "TPS71501DCKR",
  "XC7S25-1FTGB196C",
  "A5977GLPTR-T",
  "MIC5365-1.0YC5 TR",
  "M74VHC1GT04DFT1G",
  "74LVC1G17SE-7",
  "SN74LVC1G32DCKR",
  "OPA376AIDCKR",
  "ABM3B-25.000MHZ-10-1-U-T",
  "FC-135R 32.7680KA-AG3",
];

const description = [
  "Coin cell lithium battery",
  "SD micro card",
  "Common Ceramic Chip Capacitor",
  "Common Ceramic Chip Capacitor, 0603",
  "Common Ceramic Chip Capacitor, 0402",
  "SIZEG: ELECTROLYTIC CAPACITOR HA SMD",
  "Common Ceramic Chip Capacitor, 1210",
  "Low ESR Tantalum",
  "Schottky diode, 100mA, 30V",
  "ESD TVS, 3.3V, 5V, 7V, and 12V reverse standoff, low leakage, unidirectional, SOD-523",
  "600W SURFACE MOUNT TRANSIENT VOLTAGE SUPPRESSOR BIDIRECTIONAL,Put voltage rating in Value attribute",
  "Schottky diode, 3A, low Vf 450mV @3A, surge overload rating to 70A peak",
  "Schottky diode, 400mA, 40V",
  "DIODE ZENER 500MW 5.6V SOD123",
  "Fuse 3A 125V fast nano2 SMD",
  "Fuse 6.3A 125V fast nano2 SMD",
  "Fuse 0.5A 125V fast nano2 SMD",
  "4 pin miniature header, through hole, vertical, 1.25mm pitch",
  "5 pin miniature header, through hole, vertical, 1.25mm pitch",
  "2 position, 100mil, right angle shrouded locking header connector. x = 3 for standard version, 5 for supported version.",
  "Conn Header, 3 pos R/A, 100mil",
  "3 position, 100mil, vertical shrouded locking header connector",
  "Double row, surface mount, straight-pin header, 10 pins, 1A, 150VAC, tin- or gold-plated contacts",
  "Battery holder for 20MM CR2032 battery.  Includes through hole mounting and an easy release clip.",
  "50mil 2 row 20 position polarized through hole header connector",
  "8 position, 3mm, Dual Row Straight Thru-hole Header with clips (12, 13, or 14 series)",
  "3 pin miniature header, through hole, vertical, 1.25mm pitch",
  "6 position, 100 mil, single row, thru hole, straight, shrouded, locking header",
  "MicroSD card holder, hinged, right angle, 1.83mm height above board",
  "5 position, 100mil, straight shrouded locking header connector",
  "2 pin miniature header, through hole, vertical, 1.25mm pitch",
  "7 position, 100 mil, single row, thru hole, straight, shrouded, locking header",
  "4 position, 100mil, right angle shrouded locking header connector",
  "4 position, dual row, vertical, surface mount header with latch",
  "2.00mm pitch 2x7 header.  Milligrad series, center polarization",
  "Standard 100mil 2 row header, 2x5",
  "Shielded SMD Power Inductor, 1uH to 1000uH, 0.75A to 11A",
  "Power Inductor, SMD, +/-20%.  Put inductance in Value attribute, VERY Low ESR with Ampacity",
  "0603 Inductor",
  "0603 Inductor, 0603 Inductor, 750ohm at 100MHz",
  "0603 Inductor, 750ohm at 100MHz",
  "0603 surface mount LED, red",
  "0603 surface mount LED, orange",
  "0603 surface mount LED, yellow",
  "0603 surface mount LED, yellow-green",
  "0603 surface mount LED, blue",
  "SMD oscillator, 0.312-200MHz, 5.08 x 7mm",
  "MOSFET N-CH, 2.7A, VDSS=70V. RDSon=130mOhm @4.4A, 10V",
  "MOSFET N-CH, 1.2-1.4A, VDSS=60V, RDSon=0.25-0.35ohm@4.5-10V, SOT-23",
  "P-Channel MOSFET, 40V Vdss, 14A Id, TO-252, Rds = 0.011mΩ @ Vgs = -10V",
  "MOSFET P-CH, 2.4A, VDSS=100V. RDSon=350mOhm @1.4A, 10V",
  "MOSFET P-CH, 5Am VDSS=30V, RDSon=45mOhm @4.3A, 10V",
  "PNP BJT, low saturation, Vce -40V",
  "Chip resistor, 0805, 5%",
  "Chip Resistor, 0402, 5%",
  "Chip resistor, 1206, 1%",
  "Chip resistor, 0603, 5%",
  "Chip Resistor, 0603, 1%",
  "Chip resistor, 2010, 5%",
  "Chip resistor, 1210, 1%",
  "THERMISTOR NTC 0603",
  "4.7 mm´3.5 mm Square Light Touch Switches",
  "50mil pitch surface mount DIP switch, top actuation, 4 poles, 1000 operations minimum",
  "SPDT switch, single 1.65V -5.5V supply, 6ohm ON resistance, digital and analog signal capability",
  "Surface Mount Loop Test Point",
  "Thru hole test point., Black, 'Multipurpose' size",
  "Thru hole test point., Blue, 'Miniature' size",

  "Audio amplifier, 1.2W output power, 2.2V to 5.5V supply",
  "Single op amp in SOT-23 package, rail to rail, 3 Mhz bandwidth, 2.4 V/us slew. 2.7 to 16V input.",
  "ARM Cortex-M4, 32b MCU+FPU, 168MHz, 512k/1MB Flash, 192kB SRAM, Ethernet, camera interface, LQFP100",
  "Voltage supervisor - NOTE - MCP103 has a unique pinout! - 120 ms reset delay, monitoring for 1.9, 2.32, 2.63, 2.93, 3.08, 4.38, or 4.63 V  SOT23",
  "Hex Schmitt trigger inverter IC, 2V - 3.6V supply",
  "Constant current LED driver, 16 channels, independent dimming, I2C control",
  "ARM Cortex-M7 32b MCU+FPU, 216MHz, 1KB/2KB flash, 512KB SRAM, Ethernet, USB, camera and LCD-TFT interfaces",
  "512Mbit SDRAM, 100-200MHz, 3.3V",
  "Universal voltage monitor, 2.54V reference voltage, Mode Select available",
  "Step down switching regulator, 3.5-60Vin, 0.8-Vin output",
  "3.0V to 5.5V, Low-Power, up to 1Mbps, True RS-232 Transceivers",
  "Bidirectional USB 2.0 Multiplexer IC",
  "IC ESD PROTECTION LO CAP SOT23-6",
  "8 channel 12 bit ADC+DAC+IO Expansion, SPI-compatiable, 2.7-5.5V single supply",
  "Single Supply, Rail-to-Rail, Low Cost Instrumentation Amplifier",
  "Precision Micropower Low Noise CMOS Rail-toRail Input/Output Operational Amplifiers",
  "1A low thermal resistance LDO",
  "Single 3-input OR gate, SC70 package",
  "IC USB POWER SWITCH 8-SOIC, COMP USB1.0, USB2.0, Active High Enable",
  "Current shunt monitor, high resolution, zero drift, 4.5-80V operation",
  "16 Channel GPIO Expander, 10MHz SPI, 28-SSOP",
  "2ch Bus Switch, 500MHz",
  "Dual bit dual supply bus transceiver",
  "LDO Multiple Outputs, VIN 2.5V - 24V SC-70-5",
  "Spartan 7 FPGA, 1825 CLBs, 100 I/O, BGA package",
  "Stepper motor driver.  Dual phase, 40V, 2.8A output.  3.3V or 5V logic",
  "Family of fixed-output LDO regulators.  Input 2.5V to 5.5V.  Fixed-outputs from 1.0V to 3.3V.  155mV dropout at 150mA.  150mA output current.  5pin SC-70 package.  MIC5366 includes an output discharge circuit.",
  "Single channel inverter IC, 3 - 5.5V supply, SOT353",
  "Single non-inverting schmitt trigger buffer, 1.65-5.5V, push-pull output",
  "IC single 2-input pos-OR gate, 5 SC70",
  "Low-noise, low quiescent current, precision operational amplifier",
  "SMD Ceramic Oscillator, 8-125MHz, 18 pF load, 50-200 ESR, 5.0mm x 3.2 mm",
  "Small Quartz Crystal, 32-77.5kHz, CL=7, 9, or 12.5pF",
];
export const generateDummyData = () => {
  const dummyData = [];

  for (let i = 1; i <= 100; i++) {
    const bomLine: any = {
      id: `${i}`,
      line: i,
      placements: faker.number.int({ min: 1, max: 20 }),
      part: faker.helpers.arrayElement(partNumbers),
      description: faker.helpers.arrayElement(description),
      type: faker.helpers.arrayElement([
        "smt",
        "unknown",
        "bga",
        "thruhole",
        "notsure",
      ]),
      moq: faker.number.int({ min: 1, max: 2000 }),
      stock: faker.helpers.arrayElement(["min", "low", "outofstock"]),
      sourceAction: faker.helpers.arrayElement([
        "custProvided",
        "dnp",
        "requote",
      ]),
      price: faker.number.float({ min: 0.1, max: 20 }),
      alternate: null, // You can customize the alternate object if needed
    };

    dummyData.push(bomLine);
  }

  return dummyData;
};