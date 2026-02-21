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
  { name: "Europaportens grundskola", principal: "Ensk.", parentEducation: "2,7", percentNewImmigrants: "0", percentBoys: "48", faktisktVarde1: 88, faktisktVarde2: 290, lat: 55.5853, lng: 12.9920 },
  { name: "Videdals privatskolor", principal: "Ensk.", parentEducation: "2,5", percentNewImmigrants: "0", percentBoys: "50", faktisktVarde1: 94, faktisktVarde2: 283, lat: 55.5947, lng: 12.9883 },
  { name: "Bladins grundskola", principal: "Ensk.", parentEducation: "2,8", percentNewImmigrants: "0", percentBoys: "45", faktisktVarde1: 96, faktisktVarde2: 278, lat: 55.5926, lng: 12.9871 },
  { name: "Kastanjeskolan", principal: "Ensk.", parentEducation: "2,6", percentNewImmigrants: "0", percentBoys: "46", faktisktVarde1: 92, faktisktVarde2: 277, lat: 55.5863, lng: 13.0150 },
  { name: "Bäckagårdsskolan", principal: "Kom.", parentEducation: "2,4", percentNewImmigrants: "7", percentBoys: "55", faktisktVarde1: 89, faktisktVarde2: 274, lat: 55.5890, lng: 13.0893 },
  { name: "Sveaskolan LIMHAMN", principal: "Ensk.", parentEducation: "2,8", percentNewImmigrants: "0", percentBoys: "51", faktisktVarde1: 97, faktisktVarde2: 271, lat: 55.5733, lng: 12.9369 },
  { name: "Ängsdals skolor AB", principal: "Ensk.", parentEducation: "2,7", percentNewImmigrants: "0", percentBoys: "43", faktisktVarde1: 93, faktisktVarde2: 271, lat: 55.5840, lng: 12.9480 },
  { name: "Malmö Idrottsgrundskola", principal: "Kom.", parentEducation: "2,6", percentNewImmigrants: "0", percentBoys: "52", faktisktVarde1: 96, faktisktVarde2: 269, lat: 55.5849, lng: 12.9908 },
  { name: "Östra Skolan Dibber", principal: "Ensk.", parentEducation: "2,5", percentNewImmigrants: "0", percentBoys: "59", faktisktVarde1: 89, faktisktVarde2: 266, lat: 55.6019, lng: 13.0282 },
  { name: "Malmö Montessoriskola", principal: "Ensk.", parentEducation: "2,7", percentNewImmigrants: "0", percentBoys: "52", faktisktVarde1: 90, faktisktVarde2: 263, lat: 55.5863, lng: 12.9715 },
  { name: "Klagshamnsskolan", principal: "Kom.", parentEducation: "2,7", percentNewImmigrants: "1", percentBoys: "64", faktisktVarde1: 92, faktisktVarde2: 255, lat: 55.5255, lng: 12.9345 },
  { name: "Linnéskolan", principal: "Kom.", parentEducation: "2,6", percentNewImmigrants: "5", percentBoys: "60", faktisktVarde1: 79, faktisktVarde2: 255, lat: 55.5818, lng: 12.9380 },
  { name: "Pilbäckskolan", principal: "Kom.", parentEducation: "2,7", percentNewImmigrants: "0", percentBoys: "49", faktisktVarde1: 79, faktisktVarde2: 254, lat: 55.5198, lng: 12.9953 },
  { name: "Bergaskolan", principal: "Kom.", parentEducation: "2,7", percentNewImmigrants: "4", percentBoys: "54", faktisktVarde1: 79, faktisktVarde2: 253, lat: 55.5770, lng: 12.9370 },
  { name: "Backaskolan", principal: "Ensk.", parentEducation: "2,6", percentNewImmigrants: "0", percentBoys: "61", faktisktVarde1: 86, faktisktVarde2: 249, lat: 55.5890, lng: 13.0700 },
  { name: "Runstyckets skola", principal: "Ensk.", parentEducation: "2,8", percentNewImmigrants: "0", percentBoys: "35", faktisktVarde1: 85, faktisktVarde2: 248, lat: 55.5830, lng: 13.0780 },
  { name: "Mariaskolan", principal: "Ensk.", parentEducation: "2,5", percentNewImmigrants: "0", percentBoys: "60", faktisktVarde1: 85, faktisktVarde2: 246, lat: 55.5812, lng: 12.9829 },
  { name: "Mellanhedsskolan", principal: "Kom.", parentEducation: "2,5", percentNewImmigrants: "4", percentBoys: "53", faktisktVarde1: 70, faktisktVarde2: 245, lat: 55.5905, lng: 12.9649 },
  { name: "Videdalsskolan", principal: "Kom.", parentEducation: "2,3", percentNewImmigrants: "5", percentBoys: "55", faktisktVarde1: 73, faktisktVarde2: 245, lat: 55.5907, lng: 13.0699 },
  { name: "Montessori Mondial Malmö", principal: "Ensk.", parentEducation: "2,3", percentNewImmigrants: "0", percentBoys: "38", faktisktVarde1: 100, faktisktVarde2: 244, lat: 55.5930, lng: 13.0030 },
  { name: "Gottorpskolan", principal: "Kom.", parentEducation: "2,4", percentNewImmigrants: "3", percentBoys: "50", faktisktVarde1: 74, faktisktVarde2: 243, lat: 55.5533, lng: 12.9304 },
  { name: "Boukefs Privatskola", principal: "Ensk.", parentEducation: "2,0", percentNewImmigrants: "0", percentBoys: "35", faktisktVarde1: 57, faktisktVarde2: 240, lat: 55.5655, lng: 13.0089 },
  { name: "JENSEN grundskola Malmö 2", principal: "Ensk.", parentEducation: "2,2", percentNewImmigrants: "0", percentBoys: "55", faktisktVarde1: 54, faktisktVarde2: 238, lat: 55.5974, lng: 13.0303 },
  { name: "Fågelbacksskolan", principal: "Kom.", parentEducation: "2,5", percentNewImmigrants: "1", percentBoys: "50", faktisktVarde1: 78, faktisktVarde2: 237, lat: 55.5979, lng: 12.9914 },
  { name: "Elinelundsskolan", principal: "Kom.", parentEducation: "2,4", percentNewImmigrants: "6", percentBoys: "58", faktisktVarde1: 74, faktisktVarde2: 233, lat: 55.5640, lng: 12.9459 },
  { name: "Neptuniskolan", principal: "Kom.", parentEducation: "2,5", percentNewImmigrants: "2", percentBoys: "34", faktisktVarde1: 65, faktisktVarde2: 233, lat: 55.6084, lng: 12.9844 },
  { name: "Mellersta Förstadsskolan", principal: "Kom.", parentEducation: "2,4", percentNewImmigrants: "1", percentBoys: "55", faktisktVarde1: 69, faktisktVarde2: 230, lat: 55.6002, lng: 13.0136 },
  { name: "Rosengårdsskolan 7-9", principal: "Kom.", parentEducation: "1,8", percentNewImmigrants: "4", percentBoys: "61", faktisktVarde1: 78, faktisktVarde2: 230, lat: 55.5818, lng: 13.0476 },
  { name: "Sorgenfriskolan", principal: "Kom.", parentEducation: "2,5", percentNewImmigrants: "10", percentBoys: "56", faktisktVarde1: 68, faktisktVarde2: 230, lat: 55.5958, lng: 13.0194 },
  { name: "Toftanässkolan", principal: "Kom.", parentEducation: "2,5", percentNewImmigrants: "1", percentBoys: "53", faktisktVarde1: 71, faktisktVarde2: 230, lat: 55.5937, lng: 13.0968 },
  { name: "Munkhätteskolan", principal: "Kom.", parentEducation: "1,9", percentNewImmigrants: "11", percentBoys: "60", faktisktVarde1: 68, faktisktVarde2: 229, lat: 55.5743, lng: 13.0148 },
  { name: "Vittra Västra hamnen", principal: "Ensk.", parentEducation: "2,1", percentNewImmigrants: "0", percentBoys: "47", faktisktVarde1: 68, faktisktVarde2: 224, lat: 55.6130, lng: 12.9850 },
  { name: "Al-Salamahskolan", principal: "Ensk.", parentEducation: "1,9", percentNewImmigrants: "0", percentBoys: "35", faktisktVarde1: 50, faktisktVarde2: 222, lat: 55.5940, lng: 13.0350 },
  { name: "Dammfriskolan", principal: "Kom.", parentEducation: "2,3", percentNewImmigrants: "1", percentBoys: "49", faktisktVarde1: 56, faktisktVarde2: 222, lat: 55.5916, lng: 12.9802 },
  { name: "Oxievångsskolan", principal: "Kom.", parentEducation: "2,3", percentNewImmigrants: "0", percentBoys: "46", faktisktVarde1: 63, faktisktVarde2: 221, lat: 55.5369, lng: 13.0943 },
  { name: "Lindeborgsskolan", principal: "Kom.", parentEducation: "2,1", percentNewImmigrants: "4", percentBoys: "51", faktisktVarde1: 63, faktisktVarde2: 220, lat: 55.5607, lng: 12.9921 },
  { name: "Rådmansvångens skola", principal: "Kom.", parentEducation: "2,4", percentNewImmigrants: "9", percentBoys: "62", faktisktVarde1: 68, faktisktVarde2: 220, lat: 55.5932, lng: 13.0019 },
  { name: "Höjaskolan", principal: "Kom.", parentEducation: "2,1", percentNewImmigrants: "15", percentBoys: "38", faktisktVarde1: 58, faktisktVarde2: 219, lat: 55.5829, lng: 13.0653 },
  { name: "Augustenborgsskolan", principal: "Kom.", parentEducation: "2,1", percentNewImmigrants: "11", percentBoys: "55", faktisktVarde1: 60, faktisktVarde2: 215, lat: 55.5786, lng: 13.0232 },
  { name: "Söderkullaskolan", principal: "Kom.", parentEducation: "2,0", percentNewImmigrants: "4", percentBoys: "49", faktisktVarde1: 60, faktisktVarde2: 215, lat: 55.5706, lng: 13.0104 },
  { name: "Hermodsdalsskolan", principal: "Kom.", parentEducation: "1,9", percentNewImmigrants: "2", percentBoys: "59", faktisktVarde1: 53, faktisktVarde2: 214, lat: 55.5676, lng: 13.0189 },
  { name: "Örtagårdsskolan 7-9", principal: "Kom.", parentEducation: "1,7", percentNewImmigrants: "13", percentBoys: "38", faktisktVarde1: 71, faktisktVarde2: 211, lat: 55.5820, lng: 13.0410 },
  { name: "Lindängeskolan", principal: "Kom.", parentEducation: "1,9", percentNewImmigrants: "9", percentBoys: "45", faktisktVarde1: 59, faktisktVarde2: 209, lat: 55.5570, lng: 13.0141 },
  { name: "Rönnenskolan", principal: "Kom.", parentEducation: "2,0", percentNewImmigrants: "13", percentBoys: "57", faktisktVarde1: 31, faktisktVarde2: 202, lat: 55.6024, lng: 13.0308 },
  { name: "Apelgårdsskolan 7-9", principal: "Kom.", parentEducation: "1,7", percentNewImmigrants: "7", percentBoys: "56", faktisktVarde1: 37, faktisktVarde2: 199, lat: 55.5780, lng: 13.0540 },
  { name: "Kroksäcksskolan", principal: "Kom.", parentEducation: "1,8", percentNewImmigrants: "4", percentBoys: "67", faktisktVarde1: 37, faktisktVarde2: 198, lat: 55.5730, lng: 13.0050 },
  { name: "Stenkulaskolan", principal: "Kom.", parentEducation: "2,0", percentNewImmigrants: "15", percentBoys: "53", faktisktVarde1: 55, faktisktVarde2: 197, lat: 55.5935, lng: 13.0287 },
  { name: "Sofielundsskolan", principal: "Kom.", parentEducation: "1,9", percentNewImmigrants: "7", percentBoys: "62", faktisktVarde1: 48, faktisktVarde2: 190, lat: 55.5865, lng: 13.0177 },
  { name: "Johannesskolan", principal: "Kom.", parentEducation: "1,8", percentNewImmigrants: "19", percentBoys: "49", faktisktVarde1: 43, faktisktVarde2: 188, lat: 55.5912, lng: 13.0030 },
  { name: "Möllevångsskolan", principal: "Kom.", parentEducation: "2,0", percentNewImmigrants: "6", percentBoys: "41", faktisktVarde1: 35, faktisktVarde2: 186, lat: 55.5945, lng: 13.0116 },
];
