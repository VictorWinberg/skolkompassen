export interface School {
  name: string;
  kommun: string;
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
  // Malmö
  { name: "Europaportens grundskola", kommun: "Malmö", principal: "Ensk.", parentEducation: "2,7", percentNewImmigrants: "0", percentBoys: "48", faktisktVarde1: 88, faktisktVarde2: 290, lat: 55.5853, lng: 12.9920 },
  { name: "Videdals privatskolor", kommun: "Malmö", principal: "Ensk.", parentEducation: "2,5", percentNewImmigrants: "0", percentBoys: "50", faktisktVarde1: 94, faktisktVarde2: 283, lat: 55.5947, lng: 12.9883 },
  { name: "Bladins grundskola", kommun: "Malmö", principal: "Ensk.", parentEducation: "2,8", percentNewImmigrants: "0", percentBoys: "45", faktisktVarde1: 96, faktisktVarde2: 278, lat: 55.5926, lng: 12.9871 },
  { name: "Kastanjeskolan", kommun: "Malmö", principal: "Ensk.", parentEducation: "2,6", percentNewImmigrants: "0", percentBoys: "46", faktisktVarde1: 92, faktisktVarde2: 277, lat: 55.5863, lng: 13.0150 },
  { name: "Bäckagårdsskolan", kommun: "Malmö", principal: "Kom.", parentEducation: "2,4", percentNewImmigrants: "7", percentBoys: "55", faktisktVarde1: 89, faktisktVarde2: 274, lat: 55.5890, lng: 13.0893 },
  { name: "Sveaskolan LIMHAMN", kommun: "Malmö", principal: "Ensk.", parentEducation: "2,8", percentNewImmigrants: "0", percentBoys: "51", faktisktVarde1: 97, faktisktVarde2: 271, lat: 55.5733, lng: 12.9369 },
  { name: "Ängsdals skolor AB", kommun: "Malmö", principal: "Ensk.", parentEducation: "2,7", percentNewImmigrants: "0", percentBoys: "43", faktisktVarde1: 93, faktisktVarde2: 271, lat: 55.5840, lng: 12.9480 },
  { name: "Malmö Idrottsgrundskola", kommun: "Malmö", principal: "Kom.", parentEducation: "2,6", percentNewImmigrants: "0", percentBoys: "52", faktisktVarde1: 96, faktisktVarde2: 269, lat: 55.5849, lng: 12.9908 },
  { name: "Östra Skolan Dibber", kommun: "Malmö", principal: "Ensk.", parentEducation: "2,5", percentNewImmigrants: "0", percentBoys: "59", faktisktVarde1: 89, faktisktVarde2: 266, lat: 55.6019, lng: 13.0282 },
  { name: "Malmö Montessoriskola", kommun: "Malmö", principal: "Ensk.", parentEducation: "2,7", percentNewImmigrants: "0", percentBoys: "52", faktisktVarde1: 90, faktisktVarde2: 263, lat: 55.5863, lng: 12.9715 },
  { name: "Klagshamnsskolan", kommun: "Malmö", principal: "Kom.", parentEducation: "2,7", percentNewImmigrants: "1", percentBoys: "64", faktisktVarde1: 92, faktisktVarde2: 255, lat: 55.5255, lng: 12.9345 },
  { name: "Linnéskolan", kommun: "Malmö", principal: "Kom.", parentEducation: "2,6", percentNewImmigrants: "5", percentBoys: "60", faktisktVarde1: 79, faktisktVarde2: 255, lat: 55.5818, lng: 12.9380 },
  { name: "Pilbäckskolan", kommun: "Malmö", principal: "Kom.", parentEducation: "2,7", percentNewImmigrants: "0", percentBoys: "49", faktisktVarde1: 79, faktisktVarde2: 254, lat: 55.5198, lng: 12.9953 },
  { name: "Bergaskolan", kommun: "Malmö", principal: "Kom.", parentEducation: "2,7", percentNewImmigrants: "4", percentBoys: "54", faktisktVarde1: 79, faktisktVarde2: 253, lat: 55.5770, lng: 12.9370 },
  { name: "Backaskolan", kommun: "Malmö", principal: "Ensk.", parentEducation: "2,6", percentNewImmigrants: "0", percentBoys: "61", faktisktVarde1: 86, faktisktVarde2: 249, lat: 55.5890, lng: 13.0700 },
  { name: "Runstyckets skola", kommun: "Malmö", principal: "Ensk.", parentEducation: "2,8", percentNewImmigrants: "0", percentBoys: "35", faktisktVarde1: 85, faktisktVarde2: 248, lat: 55.5830, lng: 13.0780 },
  { name: "Mariaskolan", kommun: "Malmö", principal: "Ensk.", parentEducation: "2,5", percentNewImmigrants: "0", percentBoys: "60", faktisktVarde1: 85, faktisktVarde2: 246, lat: 55.5812, lng: 12.9829 },
  { name: "Mellanhedsskolan", kommun: "Malmö", principal: "Kom.", parentEducation: "2,5", percentNewImmigrants: "4", percentBoys: "53", faktisktVarde1: 70, faktisktVarde2: 245, lat: 55.5905, lng: 12.9649 },
  { name: "Videdalsskolan", kommun: "Malmö", principal: "Kom.", parentEducation: "2,3", percentNewImmigrants: "5", percentBoys: "55", faktisktVarde1: 73, faktisktVarde2: 245, lat: 55.5907, lng: 13.0699 },
  { name: "Montessori Mondial Malmö", kommun: "Malmö", principal: "Ensk.", parentEducation: "2,3", percentNewImmigrants: "0", percentBoys: "38", faktisktVarde1: 100, faktisktVarde2: 244, lat: 55.5834, lng: 13.0865 },
  { name: "Gottorpskolan", kommun: "Malmö", principal: "Kom.", parentEducation: "2,4", percentNewImmigrants: "3", percentBoys: "50", faktisktVarde1: 74, faktisktVarde2: 243, lat: 55.5533, lng: 12.9304 },
  { name: "Boukefs Privatskola", kommun: "Malmö", principal: "Ensk.", parentEducation: "2,0", percentNewImmigrants: "0", percentBoys: "35", faktisktVarde1: 57, faktisktVarde2: 240, lat: 55.5655, lng: 13.0089 },
  { name: "JENSEN grundskola Malmö 2", kommun: "Malmö", principal: "Ensk.", parentEducation: "2,2", percentNewImmigrants: "0", percentBoys: "55", faktisktVarde1: 54, faktisktVarde2: 238, lat: 55.5974, lng: 13.0303 },
  { name: "Fågelbacksskolan", kommun: "Malmö", principal: "Kom.", parentEducation: "2,5", percentNewImmigrants: "1", percentBoys: "50", faktisktVarde1: 78, faktisktVarde2: 237, lat: 55.5979, lng: 12.9914 },
  { name: "Elinelundsskolan", kommun: "Malmö", principal: "Kom.", parentEducation: "2,4", percentNewImmigrants: "6", percentBoys: "58", faktisktVarde1: 74, faktisktVarde2: 233, lat: 55.5640, lng: 12.9459 },
  { name: "Neptuniskolan", kommun: "Malmö", principal: "Kom.", parentEducation: "2,5", percentNewImmigrants: "2", percentBoys: "34", faktisktVarde1: 65, faktisktVarde2: 233, lat: 55.6084, lng: 12.9844 },
  { name: "Mellersta Förstadsskolan", kommun: "Malmö", principal: "Kom.", parentEducation: "2,4", percentNewImmigrants: "1", percentBoys: "55", faktisktVarde1: 69, faktisktVarde2: 230, lat: 55.6002, lng: 13.0136 },
  { name: "Rosengårdsskolan 7-9", kommun: "Malmö", principal: "Kom.", parentEducation: "1,8", percentNewImmigrants: "4", percentBoys: "61", faktisktVarde1: 78, faktisktVarde2: 230, lat: 55.5818, lng: 13.0476 },
  { name: "Sorgenfriskolan", kommun: "Malmö", principal: "Kom.", parentEducation: "2,5", percentNewImmigrants: "10", percentBoys: "56", faktisktVarde1: 68, faktisktVarde2: 230, lat: 55.5958, lng: 13.0194 },
  { name: "Toftanässkolan", kommun: "Malmö", principal: "Kom.", parentEducation: "2,5", percentNewImmigrants: "1", percentBoys: "53", faktisktVarde1: 71, faktisktVarde2: 230, lat: 55.5937, lng: 13.0968 },
  { name: "Munkhätteskolan", kommun: "Malmö", principal: "Kom.", parentEducation: "1,9", percentNewImmigrants: "11", percentBoys: "60", faktisktVarde1: 68, faktisktVarde2: 229, lat: 55.5743, lng: 13.0148 },
  { name: "Vittra Västra hamnen", kommun: "Malmö", principal: "Ensk.", parentEducation: "2,1", percentNewImmigrants: "0", percentBoys: "47", faktisktVarde1: 68, faktisktVarde2: 224, lat: 55.6118, lng: 12.9773 },
  { name: "Al-Salamahskolan", kommun: "Malmö", principal: "Ensk.", parentEducation: "1,9", percentNewImmigrants: "0", percentBoys: "35", faktisktVarde1: 50, faktisktVarde2: 222, lat: 55.5763, lng: 13.0850 },
  { name: "Dammfriskolan", kommun: "Malmö", principal: "Kom.", parentEducation: "2,3", percentNewImmigrants: "1", percentBoys: "49", faktisktVarde1: 56, faktisktVarde2: 222, lat: 55.5916, lng: 12.9802 },
  { name: "Oxievångsskolan", kommun: "Malmö", principal: "Kom.", parentEducation: "2,3", percentNewImmigrants: "0", percentBoys: "46", faktisktVarde1: 63, faktisktVarde2: 221, lat: 55.5369, lng: 13.0943 },
  { name: "Lindeborgsskolan", kommun: "Malmö", principal: "Kom.", parentEducation: "2,1", percentNewImmigrants: "4", percentBoys: "51", faktisktVarde1: 63, faktisktVarde2: 220, lat: 55.5620, lng: 12.9894 },
  { name: "Rådmansvångens skola", kommun: "Malmö", principal: "Kom.", parentEducation: "2,4", percentNewImmigrants: "9", percentBoys: "62", faktisktVarde1: 68, faktisktVarde2: 220, lat: 55.5932, lng: 13.0019 },
  { name: "Höjaskolan", kommun: "Malmö", principal: "Kom.", parentEducation: "2,1", percentNewImmigrants: "15", percentBoys: "38", faktisktVarde1: 58, faktisktVarde2: 219, lat: 55.5829, lng: 13.0653 },
  { name: "Augustenborgsskolan", kommun: "Malmö", principal: "Kom.", parentEducation: "2,1", percentNewImmigrants: "11", percentBoys: "55", faktisktVarde1: 60, faktisktVarde2: 215, lat: 55.5786, lng: 13.0232 },
  { name: "Söderkullaskolan", kommun: "Malmö", principal: "Kom.", parentEducation: "2,0", percentNewImmigrants: "4", percentBoys: "49", faktisktVarde1: 60, faktisktVarde2: 215, lat: 55.5706, lng: 13.0104 },
  { name: "Hermodsdalsskolan", kommun: "Malmö", principal: "Kom.", parentEducation: "1,9", percentNewImmigrants: "2", percentBoys: "59", faktisktVarde1: 53, faktisktVarde2: 214, lat: 55.5676, lng: 13.0189 },
  { name: "Örtagårdsskolan 7-9", kommun: "Malmö", principal: "Kom.", parentEducation: "1,7", percentNewImmigrants: "13", percentBoys: "38", faktisktVarde1: 71, faktisktVarde2: 211, lat: 55.5820, lng: 13.0410 },
  { name: "Lindängeskolan", kommun: "Malmö", principal: "Kom.", parentEducation: "1,9", percentNewImmigrants: "9", percentBoys: "45", faktisktVarde1: 59, faktisktVarde2: 209, lat: 55.5570, lng: 13.0141 },
  { name: "Rönnenskolan", kommun: "Malmö", principal: "Kom.", parentEducation: "2,0", percentNewImmigrants: "13", percentBoys: "57", faktisktVarde1: 31, faktisktVarde2: 202, lat: 55.6024, lng: 13.0308 },
  { name: "Apelgårdsskolan 7-9", kommun: "Malmö", principal: "Kom.", parentEducation: "1,7", percentNewImmigrants: "7", percentBoys: "56", faktisktVarde1: 37, faktisktVarde2: 199, lat: 55.5780, lng: 13.0540 },
  { name: "Kroksbäcksskolan", kommun: "Malmö", principal: "Kom.", parentEducation: "1,8", percentNewImmigrants: "4", percentBoys: "67", faktisktVarde1: 37, faktisktVarde2: 198, lat: 55.5733, lng: 12.9773 },
  { name: "Stenkulaskolan", kommun: "Malmö", principal: "Kom.", parentEducation: "2,0", percentNewImmigrants: "15", percentBoys: "53", faktisktVarde1: 55, faktisktVarde2: 197, lat: 55.5935, lng: 13.0287 },
  { name: "Sofielundsskolan", kommun: "Malmö", principal: "Kom.", parentEducation: "1,9", percentNewImmigrants: "7", percentBoys: "62", faktisktVarde1: 48, faktisktVarde2: 190, lat: 55.5865, lng: 13.0177 },
  { name: "Johannesskolan", kommun: "Malmö", principal: "Kom.", parentEducation: "1,8", percentNewImmigrants: "19", percentBoys: "49", faktisktVarde1: 43, faktisktVarde2: 188, lat: 55.5912, lng: 13.0030 },
  { name: "Möllevångsskolan", kommun: "Malmö", principal: "Kom.", parentEducation: "2,0", percentNewImmigrants: "6", percentBoys: "41", faktisktVarde1: 35, faktisktVarde2: 186, lat: 55.5945, lng: 13.0116 },
  { name: "Värner Rydénskolan 7-9", kommun: "Malmö", principal: "Kom.", parentEducation: "1,7", percentNewImmigrants: "8", percentBoys: "53", faktisktVarde1: 37, faktisktVarde2: 161, lat: 55.5847, lng: 13.0322 },

  // Lund
  { name: "Stiftelsen BMSL", kommun: "Lund", principal: "Ensk.", parentEducation: "2,9", percentNewImmigrants: "0", percentBoys: "50", faktisktVarde1: 98, faktisktVarde2: 278, lat: 55.6860, lng: 13.1820 },
  { name: "Montessori Mondial Lund", kommun: "Lund", principal: "Ensk.", parentEducation: "2,7", percentNewImmigrants: "0", percentBoys: "48", faktisktVarde1: 96, faktisktVarde2: 277, lat: 55.7038, lng: 13.2010 },
  { name: "Lunds Montessorigrundskola", kommun: "Lund", principal: "Ensk.", parentEducation: "2,8", percentNewImmigrants: "0", percentBoys: "43", faktisktVarde1: 93, faktisktVarde2: 275, lat: 55.6862, lng: 13.1815 },
  { name: "Tunaskolan", kommun: "Lund", principal: "Kom.", parentEducation: "2,9", percentNewImmigrants: "0", percentBoys: "56", faktisktVarde1: 90, faktisktVarde2: 274, lat: 55.7069, lng: 13.2151 },
  { name: "Freinetskolan i Lund", kommun: "Lund", principal: "Ensk.", parentEducation: "2,7", percentNewImmigrants: "0", percentBoys: "43", faktisktVarde1: 87, faktisktVarde2: 271, lat: 55.7030, lng: 13.1900 },
  { name: "Internationella Engelska Skolan Lund", kommun: "Lund", principal: "Ensk.", parentEducation: "2,7", percentNewImmigrants: "1", percentBoys: "53", faktisktVarde1: 91, faktisktVarde2: 270, lat: 55.6875, lng: 13.1820 },
  { name: "Järnåkraskolan 4-9", kommun: "Lund", principal: "Kom.", parentEducation: "2,6", percentNewImmigrants: "2", percentBoys: "56", faktisktVarde1: 89, faktisktVarde2: 267, lat: 55.6940, lng: 13.1946 },
  { name: "Östratornskolan", kommun: "Lund", principal: "Kom.", parentEducation: "2,8", percentNewImmigrants: "1", percentBoys: "54", faktisktVarde1: 87, faktisktVarde2: 262, lat: 55.7000, lng: 13.2150 },
  { name: "Lerbäckskolan", kommun: "Lund", principal: "Kom.", parentEducation: "2,8", percentNewImmigrants: "0", percentBoys: "43", faktisktVarde1: 87, faktisktVarde2: 261, lat: 55.7200, lng: 13.2050 },
  { name: "Svaneskolan", kommun: "Lund", principal: "Kom.", parentEducation: "2,7", percentNewImmigrants: "2", percentBoys: "52", faktisktVarde1: 86, faktisktVarde2: 261, lat: 55.7022, lng: 13.1807 },
  { name: "Sankt Thomas Skola", kommun: "Lund", principal: "Ensk.", parentEducation: "2,8", percentNewImmigrants: "0", percentBoys: "39", faktisktVarde1: 72, faktisktVarde2: 251, lat: 55.6854, lng: 13.1826 },
  { name: "Nyvångskolan", kommun: "Lund", principal: "Kom.", parentEducation: "2,7", percentNewImmigrants: "3", percentBoys: "50", faktisktVarde1: 82, faktisktVarde2: 247, lat: 55.6685, lng: 13.3501 },
  { name: "Fäladsgården", kommun: "Lund", principal: "Kom.", parentEducation: "2,6", percentNewImmigrants: "2", percentBoys: "49", faktisktVarde1: 80, faktisktVarde2: 246, lat: 55.7236, lng: 13.2008 },
  { name: "Gunnesboskolan", kommun: "Lund", principal: "Kom.", parentEducation: "2,6", percentNewImmigrants: "2", percentBoys: "54", faktisktVarde1: 75, faktisktVarde2: 242, lat: 55.7250, lng: 13.1677 },
  { name: "Kunskapsskolan Lund", kommun: "Lund", principal: "Ensk.", parentEducation: "2,6", percentNewImmigrants: "0", percentBoys: "44", faktisktVarde1: 80, faktisktVarde2: 239, lat: 55.6844, lng: 13.1815 },
  { name: "Svaleboskolan", kommun: "Lund", principal: "Kom.", parentEducation: "2,5", percentNewImmigrants: "5", percentBoys: "54", faktisktVarde1: 79, faktisktVarde2: 237, lat: 55.6352, lng: 13.4847 },
  { name: "Killebäckskolan", kommun: "Lund", principal: "Kom.", parentEducation: "2,6", percentNewImmigrants: "0", percentBoys: "52", faktisktVarde1: 81, faktisktVarde2: 233, lat: 55.7141, lng: 13.3502 },
  { name: "Vikingaskolan", kommun: "Lund", principal: "Kom.", parentEducation: "2,4", percentNewImmigrants: "2", percentBoys: "54", faktisktVarde1: 66, faktisktVarde2: 232, lat: 55.6975, lng: 13.2397 },
  { name: "Genarps skola", kommun: "Lund", principal: "Kom.", parentEducation: "2,5", percentNewImmigrants: "0", percentBoys: "64", faktisktVarde1: 71, faktisktVarde2: 224, lat: 55.5998, lng: 13.3966 },
  { name: "Lunds Waldorfskola", kommun: "Lund", principal: "Ensk.", parentEducation: "2,7", percentNewImmigrants: "5", percentBoys: "55", faktisktVarde1: 65, faktisktVarde2: 222, lat: 55.6969, lng: 13.2931 },
  { name: "Fågelskolan", kommun: "Lund", principal: "Kom.", parentEducation: "2,4", percentNewImmigrants: "8", percentBoys: "50", faktisktVarde1: 42, faktisktVarde2: 201, lat: 55.7094, lng: 13.1622 },

  // Lomma
  { name: "Bjärehovskolan", kommun: "Lomma", principal: "Kom.", parentEducation: "2,8", percentNewImmigrants: "0", percentBoys: "53", faktisktVarde1: 96, faktisktVarde2: 274, lat: 55.7209, lng: 13.0223 },
  { name: "Rutsborgskolan", kommun: "Lomma", principal: "Kom.", parentEducation: "2,8", percentNewImmigrants: "0", percentBoys: "55", faktisktVarde1: 97, faktisktVarde2: 271, lat: 55.7338, lng: 13.0259 },
  { name: "Pilångskolan", kommun: "Lomma", principal: "Kom.", parentEducation: "2,8", percentNewImmigrants: "0", percentBoys: "58", faktisktVarde1: 93, faktisktVarde2: 270, lat: 55.7250, lng: 13.0300 },
  { name: "Montessori Bjerred", kommun: "Lomma", principal: "Ensk.", parentEducation: "2,8", percentNewImmigrants: "0", percentBoys: "35", faktisktVarde1: 80, faktisktVarde2: 269, lat: 55.7382, lng: 13.0327 },
  { name: "Karstorpskolan", kommun: "Lomma", principal: "Kom.", parentEducation: "2,7", percentNewImmigrants: "3", percentBoys: "49", faktisktVarde1: 91, faktisktVarde2: 261, lat: 55.6674, lng: 13.0911 },

  // Vellinge
  { name: "Ljungenskolan", kommun: "Vellinge", principal: "Kom.", parentEducation: "2,7", percentNewImmigrants: "0", percentBoys: "58", faktisktVarde1: 99, faktisktVarde2: 272, lat: 55.4053, lng: 12.9231 },
  { name: "Tångvallaskolan", kommun: "Vellinge", principal: "Kom.", parentEducation: "2,7", percentNewImmigrants: "0", percentBoys: "68", faktisktVarde1: 94, faktisktVarde2: 266, lat: 55.4027, lng: 12.8433 },
  { name: "Ängdalaskolan", kommun: "Vellinge", principal: "Ensk.", parentEducation: "2,6", percentNewImmigrants: "0", percentBoys: "46", faktisktVarde1: 98, faktisktVarde2: 266, lat: 55.4144, lng: 12.9860 },
  { name: "Framtidskompassen i Vellinge", kommun: "Vellinge", principal: "Ensk.", parentEducation: "2,6", percentNewImmigrants: "0", percentBoys: "58", faktisktVarde1: 98, faktisktVarde2: 261, lat: 55.4738, lng: 13.0365 },
  { name: "Skanörs skola", kommun: "Vellinge", principal: "Kom.", parentEducation: "2,6", percentNewImmigrants: "3", percentBoys: "54", faktisktVarde1: 95, faktisktVarde2: 257, lat: 55.4140, lng: 12.8575 },
  { name: "Sandeplanskolan", kommun: "Vellinge", principal: "Kom.", parentEducation: "2,7", percentNewImmigrants: "2", percentBoys: "48", faktisktVarde1: 88, faktisktVarde2: 256, lat: 55.4162, lng: 12.9760 },
  { name: "Stora Hammars skola", kommun: "Vellinge", principal: "Kom.", parentEducation: "2,5", percentNewImmigrants: "2", percentBoys: "51", faktisktVarde1: 91, faktisktVarde2: 253, lat: 55.4254, lng: 12.9769 },
  { name: "Framtidskomp. V Ingelstad sk", kommun: "Vellinge", principal: "Ensk.", parentEducation: "2,5", percentNewImmigrants: "0", percentBoys: "63", faktisktVarde1: 93, faktisktVarde2: 248, lat: 55.4955, lng: 13.1119 },
  { name: "Skanör Falsterbo Montessorisk.", kommun: "Vellinge", principal: "Ensk.", parentEducation: "2,6", percentNewImmigrants: "0", percentBoys: "63", faktisktVarde1: 88, faktisktVarde2: 243, lat: 55.4028, lng: 12.8406 },
  { name: "Södervångskolan", kommun: "Vellinge", principal: "Kom.", parentEducation: "2,5", percentNewImmigrants: "2", percentBoys: "39", faktisktVarde1: 85, faktisktVarde2: 237, lat: 55.4710, lng: 13.0220 },
  { name: "Herrestorpskolan", kommun: "Vellinge", principal: "Kom.", parentEducation: "2,3", percentNewImmigrants: "0", percentBoys: "75", faktisktVarde1: 75, faktisktVarde2: 223, lat: 55.4738, lng: 13.0365 },

  // Staffanstorp
  { name: "Internationella Engelska Skolan Staffanstorp", kommun: "Staffanstorp", principal: "Ensk.", parentEducation: "2,7", percentNewImmigrants: "0", percentBoys: "53", faktisktVarde1: 98, faktisktVarde2: 278, lat: 55.6313, lng: 13.2116 },
  { name: "Hjärupslundsskolan", kommun: "Staffanstorp", principal: "Kom.", parentEducation: "2,8", percentNewImmigrants: "1", percentBoys: "46", faktisktVarde1: 85, faktisktVarde2: 262, lat: 55.6722, lng: 13.1439 },
  { name: "Hagalidskolan", kommun: "Staffanstorp", principal: "Kom.", parentEducation: "2,5", percentNewImmigrants: "1", percentBoys: "55", faktisktVarde1: 86, faktisktVarde2: 247, lat: 55.6355, lng: 13.2154 },
  { name: "Baldersskolan 7-9", kommun: "Staffanstorp", principal: "Kom.", parentEducation: "2,2", percentNewImmigrants: "6", percentBoys: "44", faktisktVarde1: 51, faktisktVarde2: 199, lat: 55.6380, lng: 13.2080 },

  // Svedala
  { name: "Aggarpsskolan 4-9", kommun: "Svedala", principal: "Kom.", parentEducation: "2,5", percentNewImmigrants: "0", percentBoys: "49", faktisktVarde1: 92, faktisktVarde2: 252, lat: 55.5015, lng: 13.2342 },
  { name: "Spångholmsskolan 4-9", kommun: "Svedala", principal: "Kom.", parentEducation: "2,4", percentNewImmigrants: "0", percentBoys: "47", faktisktVarde1: 92, faktisktVarde2: 248, lat: 55.5798, lng: 13.1724 },
  { name: "Klågerupskolan F-9", kommun: "Svedala", principal: "Kom.", parentEducation: "2,6", percentNewImmigrants: "0", percentBoys: "43", faktisktVarde1: 70, faktisktVarde2: 218, lat: 55.5350, lng: 13.1850 },
  { name: "Naverlönnskolan 4-9", kommun: "Svedala", principal: "Kom.", parentEducation: "2,3", percentNewImmigrants: "3", percentBoys: "53", faktisktVarde1: 68, faktisktVarde2: 217, lat: 55.5154, lng: 13.2318 },
];
