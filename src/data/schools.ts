export interface School {
  name: string;
  principal: string;
  parentEducation: string;
  percentNewImmigrants: string;
  percentBoys: string;
  faktisktVarde1: number | null; // Behörighet (%)
  faktisktVarde2: number | null; // Meritvärde (poäng)
  lat: number;
  lng: number;
}

export const schools: School[] = [
  { name: "Europaportens grundskola", principal: "Ensk.", parentEducation: "2,7", percentNewImmigrants: "0", percentBoys: "48", faktisktVarde1: 88, faktisktVarde2: 290, lat: 55.5958, lng: 12.9890 },
  { name: "Videdals privatskolor", principal: "Ensk.", parentEducation: "2,5", percentNewImmigrants: "0", percentBoys: "50", faktisktVarde1: 94, faktisktVarde2: 283, lat: 55.5780, lng: 13.0220 },
  { name: "Bladins grundskola", principal: "Ensk.", parentEducation: "2,8", percentNewImmigrants: "0", percentBoys: "45", faktisktVarde1: 96, faktisktVarde2: 278, lat: 55.5980, lng: 13.0070 },
  { name: "Kastanjeskolan", principal: "Ensk.", parentEducation: "2,6", percentNewImmigrants: "0", percentBoys: "46", faktisktVarde1: 92, faktisktVarde2: 277, lat: 55.5710, lng: 13.0350 },
  { name: "Bäckagårdsskolan", principal: "Kom.", parentEducation: "2,4", percentNewImmigrants: "7", percentBoys: "55", faktisktVarde1: 89, faktisktVarde2: 274, lat: 55.5640, lng: 13.0280 },
  { name: "Sveaskolan LIMHAMN", principal: "Ensk.", parentEducation: "2,8", percentNewImmigrants: "0", percentBoys: "51", faktisktVarde1: 97, faktisktVarde2: 271, lat: 55.5840, lng: 12.9380 },
  { name: "Ängsdals skolor AB", principal: "Ensk.", parentEducation: "2,7", percentNewImmigrants: "0", percentBoys: "43", faktisktVarde1: 93, faktisktVarde2: 271, lat: 55.5750, lng: 12.9520 },
  { name: "Malmö Idrottsgrundskola", principal: "Kom.", parentEducation: "2,6", percentNewImmigrants: "0", percentBoys: "52", faktisktVarde1: 96, faktisktVarde2: 269, lat: 55.5870, lng: 12.9950 },
  { name: "Östra Skolan Dibber", principal: "Ensk.", parentEducation: "2,5", percentNewImmigrants: "0", percentBoys: "59", faktisktVarde1: 89, faktisktVarde2: 266, lat: 55.6020, lng: 13.0200 },
  { name: "Malmö Montessoriskola", principal: "Ensk.", parentEducation: "2,7", percentNewImmigrants: "0", percentBoys: "52", faktisktVarde1: 90, faktisktVarde2: 263, lat: 55.5920, lng: 13.0150 },
  { name: "Klagshamnsskolan", principal: "Kom.", parentEducation: "2,7", percentNewImmigrants: "1", percentBoys: "64", faktisktVarde1: 92, faktisktVarde2: 255, lat: 55.5560, lng: 12.9050 },
  { name: "Linnéskolan", principal: "Kom.", parentEducation: "2,6", percentNewImmigrants: "5", percentBoys: "60", faktisktVarde1: 79, faktisktVarde2: 255, lat: 55.5950, lng: 13.0250 },
  { name: "Pilbäckskolan", principal: "Kom.", parentEducation: "2,7", percentNewImmigrants: "0", percentBoys: "49", faktisktVarde1: 79, faktisktVarde2: 254, lat: 55.5770, lng: 12.9600 },
  { name: "Bergaskolan", principal: "Kom.", parentEducation: "2,7", percentNewImmigrants: "4", percentBoys: "54", faktisktVarde1: 79, faktisktVarde2: 253, lat: 55.5680, lng: 12.9700 },
  { name: "Backaskolan", principal: "Ensk.", parentEducation: "2,6", percentNewImmigrants: "0", percentBoys: "61", faktisktVarde1: 86, faktisktVarde2: 249, lat: 55.5630, lng: 13.0600 },
  { name: "Runstyckets skola", principal: "Ensk.", parentEducation: "2,8", percentNewImmigrants: "0", percentBoys: "35", faktisktVarde1: 85, faktisktVarde2: 248, lat: 55.5850, lng: 13.0420 },
  { name: "Mariaskolan", principal: "Ensk.", parentEducation: "2,5", percentNewImmigrants: "0", percentBoys: "60", faktisktVarde1: 85, faktisktVarde2: 246, lat: 55.6000, lng: 13.0120 },
  { name: "Mellanhedsskolan", principal: "Kom.", parentEducation: "2,5", percentNewImmigrants: "4", percentBoys: "53", faktisktVarde1: 70, faktisktVarde2: 245, lat: 55.5880, lng: 12.9780 },
  { name: "Videdalsskolan", principal: "Kom.", parentEducation: "2,3", percentNewImmigrants: "5", percentBoys: "55", faktisktVarde1: 73, faktisktVarde2: 245, lat: 55.5760, lng: 13.0250 },
  { name: "Montessori Mondial Malmö", principal: "Ensk.", parentEducation: "2,3", percentNewImmigrants: "0", percentBoys: "38", faktisktVarde1: 100, faktisktVarde2: 244, lat: 55.6050, lng: 13.0050 },
  { name: "Gottorpskolan", principal: "Kom.", parentEducation: "2,4", percentNewImmigrants: "3", percentBoys: "50", faktisktVarde1: 74, faktisktVarde2: 243, lat: 55.5600, lng: 13.0450 },
  { name: "Boukefs Privatskola", principal: "Ensk.", parentEducation: "2,0", percentNewImmigrants: "0", percentBoys: "35", faktisktVarde1: 57, faktisktVarde2: 240, lat: 55.5990, lng: 13.0300 },
  { name: "JENSEN grundskola Malmö 2", principal: "Ensk.", parentEducation: "2,2", percentNewImmigrants: "0", percentBoys: "55", faktisktVarde1: 54, faktisktVarde2: 238, lat: 55.6070, lng: 12.9960 },
  { name: "Fågelbacksskolan", principal: "Kom.", parentEducation: "2,5", percentNewImmigrants: "1", percentBoys: "50", faktisktVarde1: 78, faktisktVarde2: 237, lat: 55.5700, lng: 12.9800 },
  { name: "Elinelundsskolan", principal: "Kom.", parentEducation: "2,4", percentNewImmigrants: "6", percentBoys: "58", faktisktVarde1: 74, faktisktVarde2: 233, lat: 55.5510, lng: 13.0150 },
  { name: "Neptuniskolan", principal: "Kom.", parentEducation: "2,5", percentNewImmigrants: "2", percentBoys: "34", faktisktVarde1: 65, faktisktVarde2: 233, lat: 55.5920, lng: 12.9880 },
  { name: "Mellersta Förstadsskolan", principal: "Kom.", parentEducation: "2,4", percentNewImmigrants: "1", percentBoys: "55", faktisktVarde1: 69, faktisktVarde2: 230, lat: 55.5980, lng: 13.0180 },
  { name: "Rosengårdsskolan 7-9", principal: "Kom.", parentEducation: "1,8", percentNewImmigrants: "4", percentBoys: "61", faktisktVarde1: 78, faktisktVarde2: 230, lat: 55.5890, lng: 13.0450 },
  { name: "Sorgenfriskolan", principal: "Kom.", parentEducation: "2,5", percentNewImmigrants: "10", percentBoys: "56", faktisktVarde1: 68, faktisktVarde2: 230, lat: 55.5980, lng: 13.0380 },
  { name: "Toftanässkolan", principal: "Kom.", parentEducation: "2,5", percentNewImmigrants: "1", percentBoys: "53", faktisktVarde1: 71, faktisktVarde2: 230, lat: 55.5550, lng: 13.0350 },
  { name: "Munkhätteskolan", principal: "Kom.", parentEducation: "1,9", percentNewImmigrants: "11", percentBoys: "60", faktisktVarde1: 68, faktisktVarde2: 229, lat: 55.5720, lng: 13.0500 },
  { name: "Vittra Västra hamnen", principal: "Ensk.", parentEducation: "2,1", percentNewImmigrants: "0", percentBoys: "47", faktisktVarde1: 68, faktisktVarde2: 224, lat: 55.6130, lng: 12.9850 },
  { name: "Al-Salamahskolan", principal: "Ensk.", parentEducation: "1,9", percentNewImmigrants: "0", percentBoys: "35", faktisktVarde1: 50, faktisktVarde2: 222, lat: 55.5940, lng: 13.0350 },
  { name: "Dammfriskolan", principal: "Kom.", parentEducation: "2,3", percentNewImmigrants: "1", percentBoys: "49", faktisktVarde1: 56, faktisktVarde2: 222, lat: 55.5690, lng: 13.0080 },
  { name: "Oxievångsskolan", principal: "Kom.", parentEducation: "2,3", percentNewImmigrants: "0", percentBoys: "46", faktisktVarde1: 63, faktisktVarde2: 221, lat: 55.5480, lng: 13.0250 },
  { name: "Lindeborgsskolan", principal: "Kom.", parentEducation: "2,1", percentNewImmigrants: "4", percentBoys: "51", faktisktVarde1: 63, faktisktVarde2: 220, lat: 55.5670, lng: 13.0400 },
  { name: "Rådmansvångens skola", principal: "Kom.", parentEducation: "2,4", percentNewImmigrants: "9", percentBoys: "62", faktisktVarde1: 68, faktisktVarde2: 220, lat: 55.5850, lng: 13.0100 },
  { name: "Höjaskolan", principal: "Kom.", parentEducation: "2,1", percentNewImmigrants: "15", percentBoys: "38", faktisktVarde1: 58, faktisktVarde2: 219, lat: 55.5590, lng: 13.0550 },
  { name: "Augustenborgsskolan", principal: "Kom.", parentEducation: "2,1", percentNewImmigrants: "11", percentBoys: "55", faktisktVarde1: 60, faktisktVarde2: 215, lat: 55.5810, lng: 13.0380 },
  { name: "Söderkullaskolan", principal: "Kom.", parentEducation: "2,0", percentNewImmigrants: "4", percentBoys: "49", faktisktVarde1: 60, faktisktVarde2: 215, lat: 55.5530, lng: 13.0480 },
  { name: "Hermodsdalsskolan", principal: "Kom.", parentEducation: "1,9", percentNewImmigrants: "2", percentBoys: "59", faktisktVarde1: 53, faktisktVarde2: 214, lat: 55.5740, lng: 13.0320 },
  { name: "Örtagårdsskolan 7-9", principal: "Kom.", parentEducation: "1,7", percentNewImmigrants: "13", percentBoys: "38", faktisktVarde1: 71, faktisktVarde2: 211, lat: 55.5860, lng: 13.0500 },
  { name: "Lindängeskolan", principal: "Kom.", parentEducation: "1,9", percentNewImmigrants: "9", percentBoys: "45", faktisktVarde1: 59, faktisktVarde2: 209, lat: 55.5580, lng: 13.0380 },
  { name: "Rönnenskolan", principal: "Kom.", parentEducation: "2,0", percentNewImmigrants: "13", percentBoys: "57", faktisktVarde1: 31, faktisktVarde2: 202, lat: 55.5950, lng: 13.0500 },
  { name: "Apelgårdsskolan 7-9", principal: "Kom.", parentEducation: "1,7", percentNewImmigrants: "7", percentBoys: "56", faktisktVarde1: 37, faktisktVarde2: 199, lat: 55.5610, lng: 13.0500 },
  { name: "Kroksäcksskolan", principal: "Kom.", parentEducation: "1,8", percentNewImmigrants: "4", percentBoys: "67", faktisktVarde1: 37, faktisktVarde2: 198, lat: 55.5570, lng: 13.0080 },
  { name: "Stenkulaskolan", principal: "Kom.", parentEducation: "2,0", percentNewImmigrants: "15", percentBoys: "53", faktisktVarde1: 55, faktisktVarde2: 197, lat: 55.5620, lng: 13.0200 },
  { name: "Sofielundsskolan", principal: "Kom.", parentEducation: "1,9", percentNewImmigrants: "7", percentBoys: "62", faktisktVarde1: 48, faktisktVarde2: 190, lat: 55.5960, lng: 13.0280 },
  { name: "Johannesskolan", principal: "Kom.", parentEducation: "1,8", percentNewImmigrants: "19", percentBoys: "49", faktisktVarde1: 43, faktisktVarde2: 188, lat: 55.5900, lng: 13.0550 },
  { name: "Möllevångsskolan", principal: "Kom.", parentEducation: "2,0", percentNewImmigrants: "6", percentBoys: "41", faktisktVarde1: 35, faktisktVarde2: 186, lat: 55.5870, lng: 13.0150 },
];
