// ADVENT OF CODE 2020

//  DAY 1 : REPORT REPAIR

// After saving Christmas five years in a row, you've decided to take a vacation at a nice resort on a tropical island. Surely, Christmas will go on without you.

// The tropical island has its own currency and is entirely cash-only. The gold coins used there have a little picture of a starfish; the locals just call them stars. None of the currency exchanges seem to have heard of them, but somehow, you'll need to find fifty of these coins by the time you arrive so you can pay the deposit on your room.

// To save your vacation, you need to get all fifty stars by December 25th.

// Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

// Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.

// Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

// For example, suppose your expense report contained the following:

// 1721
// 979
// 366
// 299
// 675
// 1456
// In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

// Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?

const nombres = [
  1150, 1579, 1361, 1319, 1201, 1253, 1806, 1783, 1164, 1772, 1920, 1428, 1918,
  245, 1504, 1952, 1057, 1977, 704, 1119, 1971, 1200, 1650, 1795, 1877, 1932,
  1811, 1981, 1803, 1366, 1580, 1986, 1976, 1063, 1895, 1143, 1991, 1061, 1855,
  1947, 1134, 1800, 1898, 1778, 1964, 1949, 1103, 1770, 1321, 2005, 1758, 1181,
  1140, 1873, 1946, 1540, 1909, 1710, 1705, 1313, 1196, 1084, 1870, 1610, 1708,
  1810, 1133, 1375, 1264, 1921, 1624, 41, 1899, 1226, 1757, 1978, 1485, 1385,
  1526, 1653, 1130, 1223, 1577, 1912, 1894, 276, 954, 1269, 1769, 1924, 93,
  1165, 1812, 1092, 1402, 1284, 1903, 1884, 1581, 1887, 1963, 1983, 1233, 1445,
  1974, 1956, 1691, 1954, 2000, 1469, 1875, 955, 1334, 1116, 1700, 1818, 1790,
  1704, 1901, 1072, 1848, 1990, 1724, 1719, 1638, 1311, 1474, 1837, 1801, 1929,
  1791, 1317, 1643, 1632, 1813, 1488, 1129, 1998, 1771, 1793, 1074, 1826, 1935,
  1462, 1230, 1797, 1878, 1751, 1993, 1437, 1967, 1844, 1438, 1969, 1175, 1823,
  1124, 1922, 154, 936, 1117, 1145, 1308, 1320, 1767, 1850, 1809, 1350, 1820,
  1082, 1597, 1913, 1766, 1701, 1294, 1556, 2006, 1480, 1953, 1104, 1861, 1966,
  1248, 1671, 1955, 1863, 1202, 1356, 1842, 2010, 1288, 1067, 1576, 1295, 1760,
  1888, 1639, 1282, 1633, 1619,
];

// Part One

for (let i = 0; i < nombres.length; i++) {
  for (let j = i + 1; j < nombres.length; j++) {
    if (nombres[i] + nombres[j] === 2020) {
      console.log("Nombres : " + nombres[i] + " et " + nombres[j]);
      console.log("Multiplication : " + nombres[i] * nombres[j]);
    }
  }
}

// Part Two
//   The Elves in accounting are thankful for your help; one of them even offers you a starfish coin they had left over from a past vacation. They offer you a second one if you can find three numbers in your expense report that meet the same criteria.

//   Using the above example again, the three entries that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.

//   In your expense report, what is the product of the three entries that sum to 2020?

for (let i = 0; i < nombres.length; i++) {
  for (let j = i + 1; j < nombres.length; j++) {
    for (let h = j + 1; h < nombres.length; h++) {
      if (nombres[i] + nombres[j] + nombres[h] === 2020) {
        console.log(
          "Nombres : " + nombres[i] + ", " + nombres[j] + " et " + nombres[h]
        );
        console.log("Multiplication : " + nombres[i] * nombres[j] * nombres[h]);
      }
    }
  }
}


// --- Day 2: Password Philosophy ---
// Your flight departs in a few days from the coastal airport; the easiest way down to the coast from here is via toboggan.

// The shopkeeper at the North Pole Toboggan Rental Shop is having a bad day. "Something's wrong with our computers; we can't log in!" You ask if you can take a look.

// Their password database seems to be a little corrupted: some of the passwords wouldn't have been allowed by the Official Toboggan Corporate Policy that was in effect when they were chosen.

// To try to debug the problem, they have created a list (your puzzle input) of passwords (according to the corrupted database) and the corporate policy when that password was set.

// For example, suppose you have the following list:

// 1-3 a: abcde
// 1-3 b: cdefg
// 2-9 c: ccccccccc
// Each line gives the password policy and then the password. The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid. For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.

// In the above example, 2 passwords are valid. The middle password, cdefg, is not; it contains no instances of b, but needs at least 1. The first and third passwords are valid: they contain one a or nine c, both within the limits of their respective policies.

// How many passwords are valid according to their policies?


// test sur petite liste
const inputData = [
  '1-3 a: abcde',
  '1-3 b: cdefg',
  '2-9 c: ccccccccc',
];

function isPasswordValid(policy, password) {
  const [minMax, letter] = policy.split(' ');
  const [min, max] = minMax.split('-').map(Number);

  const letterCount = password.split('').filter(char => char === letter).length;

  return letterCount >= min && letterCount <= max;
}

function processInputData(data) {
  let validPasswordsCount = 0;

  for (const line of data) {
    const [policy, password] = line.split(': ');

    if (isPasswordValid(policy, password)) {
      validPasswordsCount++;
    }
  }

  return validPasswordsCount;
}

console.log(processInputData(inputData));



