import { getRandomNumber, shuffleArray } from '../utils/baseUtils';
import { TypePageData, TypeTrianglePoints } from '../types/baseTypes';

const NUM_POINTS: number = 33;
const pointsRandom: TypeTrianglePoints[] = [];
Array.from(Array(NUM_POINTS).keys()).forEach((_n) => {
  pointsRandom.push([
    getRandomNumber(2, 98),
    getRandomNumber(2, 98),
    getRandomNumber(2, 98),
    getRandomNumber(2, 98),
    getRandomNumber(2, 98),
    getRandomNumber(2, 98),
  ]);
});
const pointsGraysTorreys: TypeTrianglePoints[] = [
  [2, 92, 8, 83, 12, 90],
  [8, 83, 12, 90, 14, 55],
  [14, 55, 17.5, 44, 25, 41],
  [14, 55, 25, 41, 12, 90],
  [25, 41, 28, 36.5, 31, 39],
  [25, 41, 31, 39, 42, 60],
  [25, 41, 42, 60, 27, 62],
  [25, 41, 27, 62, 12, 90],
  [42, 60, 27, 62, 12, 90],
  [42, 60, 12, 90, 30, 96],
  [42, 60, 30, 96, 43, 90],
  [42, 60, 43, 90, 54, 72],
  [43, 90, 54, 72, 58, 84],
  [43, 90, 58, 84, 51, 93],
  [43, 90, 51, 93, 41, 99],
  [43, 90, 41, 99, 30, 96],
  [58, 84, 51, 93, 71, 92],
  [58, 84, 71, 92, 64, 76],
  [58, 84, 64, 76, 54, 72],
  [64, 76, 54, 72, 60, 38],
  [54, 72, 60, 38, 42, 60],
  [60, 38, 42, 60, 43, 46],
  [42, 60, 43, 46, 31, 39],
  [60, 38, 64, 76, 63, 34],
  [64, 76, 63, 34, 68, 42],
  [64, 76, 68, 42, 75, 62],
  [64, 76, 75, 62, 80, 77],
  [64, 76, 71, 92, 80, 77],
  [71, 92, 80, 77, 98, 97],
  [80, 77, 89, 62, 98, 97],
  [80, 77, 84, 50, 89, 62],
  [75, 62, 80, 77, 84, 50],
  [68, 42, 75, 62, 84, 50],
];
const pointsEverest: TypeTrianglePoints[] = [
  [2, 98, 15, 80, 12, 92],
  [2, 98, 15, 80, 9, 75],
  [15, 80, 9, 75, 14, 64],
  [15, 80, 14, 64, 19, 56],
  [15, 80, 12, 92, 33, 74],
  [15, 80, 33, 74, 19, 56],
  [19, 56, 29, 47, 33, 74],
  [29, 47, 33, 74, 47, 62],
  [12, 92, 33, 74, 24, 96],
  [24, 96, 33, 74, 41, 92],
  [33, 74, 41, 92, 47, 62],
  [41, 92, 47, 62, 55, 84],
  [47, 62, 55, 84, 52, 55.5],
  [55, 84, 52, 55.5, 60, 50],
  [55, 84, 60, 50, 67, 62],
  [55, 84, 67, 62, 63, 81],
  [55, 84, 63, 81, 65, 98],
  [55, 84, 41, 92, 65, 98],
  [63, 81, 65, 98, 75, 87],
  [63, 81, 75, 87, 67, 62],
  [65, 98, 75, 87, 88, 93],
  [75, 87, 88, 93, 84, 52],
  [75, 87, 84, 52, 67, 62],
  [84, 52, 67, 62, 63, 55.5],
  [65, 40, 63, 55.5, 61, 52],
  [65, 40, 63, 55.5, 73, 30],
  [63, 55.5, 73, 30, 81, 52.5],
  [88, 93, 98, 97, 92, 70],
  [88, 93, 92, 70, 84.5, 57.5],
  [30.5, 48.25, 39, 33, 41, 57],
  [39, 33, 41, 57, 46, 50],
  [41, 57, 46, 50, 47, 62],
  [46, 50, 47, 62, 50, 58],
];
const pointsMachuPicchu: TypeTrianglePoints[] = [
  [2, 98, 11, 80, 18, 94],
  [11, 80, 13, 68, 17, 64],
  [11, 80, 17, 64, 18, 94],
  [17, 64, 24, 84, 18, 94],
  [17, 64, 23, 75, 24, 84],
  [23, 75, 24, 84, 29, 72],
  [18, 94, 24, 84, 32, 99],
  [24, 84, 29, 72, 32, 99],
  [29, 72, 32, 99, 35, 69],
  [32, 99, 35, 69, 45, 95],
  [35, 69, 42, 73, 45, 95],
  [35, 69, 42, 73, 42, 45],
  [42, 73, 42, 45, 48, 36],
  [48, 36, 51, 39, 54, 51],
  [42, 73, 48, 36, 54, 51],
  [42, 73, 54, 51, 59, 66],
  [42, 73, 45, 95, 59, 66],
  [45, 95, 55, 92, 59, 66],
  [55, 92, 59, 66, 62, 98],
  [54, 51, 58, 53, 59, 66],
  [58, 53, 59, 66, 68, 66],
  [59, 66, 62, 98, 68, 66],
  [62, 98, 68, 66, 72, 83],
  [62, 98, 69, 94, 72, 83],
  [69, 94, 72, 83, 78, 96],
  [69, 94, 72, 83, 78, 96],
  [72, 83, 76, 71, 78, 96],
  [68, 66, 72, 83, 76, 71],
  [76, 71, 78, 96, 83, 78],
  [78, 96, 83, 78, 86, 84],
  [78, 96, 83.5, 98, 86, 84],
  [83.5, 98, 86, 84, 91, 93],
  [83.5, 98, 91, 93, 98, 98],
];
const pointsWashburn: TypeTrianglePoints[] = [
  [2, 98, 7, 78, 13, 90],
  [7, 78, 13, 90, 14, 60],
  [13, 90, 14, 60, 18, 50],
  [13, 90, 22, 96, 38, 86],
  [13, 90, 22, 76, 38, 86],
  [13, 90, 18, 50, 22, 76],
  [18, 50, 22, 76, 23, 47],
  [22, 76, 23, 47, 36, 66],
  [23, 47, 27, 46, 36, 66],
  [27, 46, 36, 66, 42, 58],
  [22, 76, 36, 66, 38, 86],
  [36, 66, 38, 86, 46, 97],
  [36, 66, 42, 58, 46, 97],
  [27, 46, 40, 41, 42, 58],
  [40, 41, 42, 58, 46, 40],
  [42, 58, 46, 40, 58, 38],
  [46, 40, 58, 38, 60, 27],
  [58, 38, 60, 27, 63, 26],
  [58, 38, 63, 26, 68, 49],
  [42, 58, 58, 38, 68, 49],
  [42, 58, 54, 65, 68, 49],
  [42, 58, 46, 97, 54, 65],
  [46, 97, 54, 65, 76, 92],
  [54, 65, 68, 49, 76, 92],
  [68, 49, 76, 92, 84, 70],
  [68, 49, 78, 39, 84, 70],
  [63, 26, 68, 49, 78, 39],
  [70, 32, 75, 30, 78, 39],
  [75, 30, 78, 39, 86, 45],
  [78, 39, 84, 70, 86, 45],
  [84, 70, 86, 45, 92, 82],
  [76, 92, 84, 70, 92, 82],
  [76, 92, 92, 82, 97, 98],
];
const pointsBeckler: TypeTrianglePoints[] = [
  [2, 98, 13, 83, 28, 94],
  [13, 83, 28, 94, 21, 64],
  [13, 83, 21, 64, 23, 40],
  [21, 64, 23, 40, 30, 37],
  [21, 64, 30, 37, 36, 50],
  [21, 64, 28, 94, 36, 50],
  [30, 37, 36, 50, 38, 41],
  [38, 41, 41, 36, 45, 40],
  [36, 50, 38, 41, 45, 40],
  [36, 50, 45, 40, 57, 47],
  [45, 40, 51, 34, 57, 47],
  [53, 38.25, 57, 47, 61, 45],
  [53, 74, 57, 47, 61, 45],
  [36, 50, 53, 74, 57, 47],
  [36, 50, 42, 71, 53, 74],
  [28, 94, 36, 50, 42, 71],
  [28, 94, 41, 97, 42, 71],
  [41, 97, 42, 71, 53, 74],
  [41, 97, 53, 74, 55, 84],
  [41, 97, 55, 84, 65, 92],
  [55, 84, 62, 76, 65, 92],
  [53, 74, 55, 84, 62, 76],
  [53, 74, 61, 45, 62, 76],
  [61, 45, 62, 76, 65, 55],
  [62, 76, 65, 55, 68, 60],
  [62, 76, 68, 60, 75, 70],
  [62, 76, 65, 92, 75, 70],
  [65, 92, 75, 70, 76, 97],
  [75, 70, 79, 78, 76, 97],
  [76, 97, 79, 78, 82, 84],
  [76, 97, 82, 84, 85, 87],
  [76, 97, 85, 87, 90, 95],
  [85, 87, 90, 95, 98, 98],
];

export const data: TypePageData[] = [
  {
    id: 'grays-and-torreys',
    title: 'Grays and Torreys',
    points: pointsRandom,
    markers: {
      points: [],
      labels: [],
    },
    metaData: [
      'Highest Point: 14,270 feet',
      'Mileage: 8.6 miles',
      'Duration: 1 day',
      'Location: Colorado',
    ],
    strokeColor: 'white',
  },
  {
    id: 'grays-and-torreys',
    title: 'Grays and Torreys',
    points: shuffleArray(pointsGraysTorreys),
    markers: {
      points: [[0.28, 0.365], [0.63, 0.34]],
      labels: ['Grays Peak', 'Torreys Peak'],
    },
    metaData: [
      'Highest Point: 14,275 feet (Torreys Peak Summit)',
      'Mileage: 8.6 miles',
      'Duration: 1 day',
      'Location: Colorado',
    ],
    strokeColor: 'white',
  },
  {
    id: 'mount-everest-basecamp',
    title: 'Mount Everest Basecamp',
    points: shuffleArray(pointsEverest),
    markers: {
      points: [[0.29, 0.47], [0.39, 0.33], [0.73, 0.3], [0.41, 0.92]],
      labels: ['Pumori', 'Mount Everest', 'Nuptse', 'Basecamp'],
    },
    metaData: [
      'Highest Point: 18,519 feet (Kala Patthar)',
      'Mileage: 38.8 miles',
      'Duration: 8 days',
      'Location: Sagarmatha NP, Nepal',
    ],
    strokeColor: 'white',
  },
  {
    id: 'machu-picchu',
    title: 'Machu Picchu',
    points: shuffleArray(pointsMachuPicchu),
    markers: {
      points: [[0.48, 0.36], [0.45, 0.95]],
      labels: ['Montaña Machu Picchu', 'Machu Picchu'],
    },
    metaData: [
      "Highest Point: 13,766 feet (Dead Woman's Pass)",
      'Mileage: 26.8 miles',
      'Duration: 4 days',
      'Location: Cusco Region, Peru',
    ],
    strokeColor: 'white',
  },
  {
    id: 'mount-washburn',
    title: 'Mount Washburn',
    points: shuffleArray(pointsWashburn),
    markers: {
      points: [[0.63, 0.26]],
      labels: ['Mount Washburn'],
    },
    metaData: [
      'Highest Point: 10,219 feet (Mount Washburn Summit)',
      'Mileage: 3.2 miles',
      'Duration: 1 day',
      'Location: Yellowstone NP, Wyoming',
    ],
    strokeColor: 'white',
  },
  {
    id: 'beckler-peak',
    title: 'Beckler Peak',
    points: shuffleArray(pointsBeckler),
    markers: {
      points: [[0.51, 0.34]],
      labels: ['Beckler Peak'],
    },
    metaData: [
      'Highest Point: 5,026 feet (Beckler Peak Summit)',
      'Mileage: 3.8 miles',
      'Duration: 1 day',
      'Location: Mt. Baker-Snoqualmie NF, Washington',
    ],
    strokeColor: 'white',
  },
];

// imageSrc = 'https://www.pexels.com/photo/photo-of-blue-sky-912110/';
