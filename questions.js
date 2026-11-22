window.QUESTIONS = [
  {
    "id": "L2-1",
    "unit": "L2",
    "title": "Midnight rollover",
    "titleZh": "跨越午夜",
    "en": "An instrument starts recording at a given minute of the day. Read two integers on separate lines: the start minute (0–1439, measured from midnight) and a non-negative duration in minutes. Print the number of midnights crossed and the finishing minute of the day, separated by one space.",
    "zh": "仪器在当天某一分钟开始记录。分两行读入两个整数：从零点起算的开始分钟数（0–1439）和非负的记录时长（分钟）。在一行输出跨过的午夜次数和结束时当天的分钟数，以一个空格分隔。",
    "hint": "One day has 1440 minutes. What do the quotient and remainder of total minutes represent?",
    "hintZh": "一天有 1440 分钟。总分钟数除以 1440 的商和余数各代表什么？",
    "level": "Easy",
    "topic": "Integer arithmetic",
    "starter": "start = int(input())\nduration = int(input())\n# Calculate when the recording ends.\n",
    "solution": "start = int(input())\nduration = int(input())\ntotal = start + duration\nprint(total // 1440, total % 1440)\n",
    "tests": [
      {
        "input": "1385\n120\n",
        "output": "1 65"
      },
      {
        "input": "0\n0\n",
        "output": "0 0"
      },
      {
        "input": "1439\n1\n",
        "output": "1 0"
      },
      {
        "input": "60\n4321\n",
        "output": "3 61"
      },
      {
        "input": "20\n5\n",
        "output": "0 25"
      }
    ],
    "topicZh": "整数运算"
  },
  {
    "id": "L2-2",
    "unit": "L2",
    "title": "Crate balance",
    "titleZh": "装箱余量",
    "en": "A stockroom has N identical components and boxes that hold C components each. Read N (at least 0) and C (at least 1) on separate lines. Print the number of completely filled boxes, the number of loose components left after filling them, and the number of extra components needed to fill the last partial box. Print all three integers on one line. If there is no partial box, the last number is 0.",
    "zh": "库房有 N 个相同的零件，每箱可装 C 个。分两行读入 N（至少为 0）和 C（至少为 1）。在一行依次输出装满的箱数、剩余零件数，以及将最后一个未满箱装满还需的零件数，数字以空格分隔。没有未满箱时，第三个数为 0。",
    "hint": "Check what happens when N is an exact multiple of C before printing the number needed.",
    "hintZh": "先考虑 N 恰好能被 C 整除时，还需要多少个零件。",
    "level": "Easy",
    "topic": "Remainder",
    "starter": "items = int(input())\ncapacity = int(input())\n",
    "solution": "items = int(input())\ncapacity = int(input())\nloose = items % capacity\nneeded = (capacity - loose) % capacity\nprint(items // capacity, loose, needed)\n",
    "tests": [
      {
        "input": "29\n8\n",
        "output": "3 5 3"
      },
      {
        "input": "24\n8\n",
        "output": "3 0 0"
      },
      {
        "input": "0\n8\n",
        "output": "0 0 0"
      },
      {
        "input": "3\n5\n",
        "output": "0 3 2"
      },
      {
        "input": "4\n1\n",
        "output": "4 0 0"
      }
    ],
    "topicZh": "取余"
  },
  {
    "id": "L2-3",
    "unit": "L2",
    "title": "Calibration window",
    "titleZh": "校准区间",
    "en": "Read three decimal numbers on separate lines: a lower limit, an upper limit and a sensor reading. The lower limit is strictly smaller than the upper limit. A reading is inside the calibration window if it is at least the lower limit and strictly less than the upper limit. Print INSIDE or OUTSIDE in uppercase.",
    "zh": "分三行读入三个小数：下限、上限和传感器读数。下限严格小于上限。读数大于或等于下限、且严格小于上限时，输出大写的 INSIDE，否则输出 OUTSIDE。",
    "hint": "Translate each endpoint rule into a comparison and combine them with and.",
    "hintZh": "把两个端点的条件分别写成比较表达式，再用 and 连接。",
    "level": "Easy",
    "topic": "Boolean expressions",
    "starter": "lower = float(input())\nupper = float(input())\nreading = float(input())\n",
    "solution": "lower = float(input())\nupper = float(input())\nreading = float(input())\nif lower <= reading < upper:\n    print(\"INSIDE\")\nelse:\n    print(\"OUTSIDE\")\n",
    "tests": [
      {
        "input": "1.2\n5.6\n3.1\n",
        "output": "INSIDE"
      },
      {
        "input": "1.2\n5.6\n5.6\n",
        "output": "OUTSIDE"
      },
      {
        "input": "-3\n0\n-3\n",
        "output": "INSIDE"
      },
      {
        "input": "3.7\n6\n3.69\n",
        "output": "OUTSIDE"
      }
    ],
    "topicZh": "布尔表达式"
  },
  {
    "id": "L2-4",
    "unit": "L2",
    "title": "Metered bench",
    "titleZh": "工作台计费",
    "en": "A lab charges 12 dollars for up to 30 minutes at a bench. Beyond 30 minutes, add 5 dollars for each started block of 15 extra minutes. The total is capped at 50 dollars per visit. Read one integer giving the visit length (1–1440 minutes) and print the fee as an integer.",
    "zh": "实验室工作台使用不超过 30 分钟收费 12 元。超过 30 分钟的部分每开始一个 15 分钟时段加收 5 元，不足 15 分钟也按一段算。单次收费封顶 50 元。读入一个表示使用分钟数（1–1440）的整数，输出整数费用。",
    "hint": "For a positive number of extra minutes m, (m + 14) // 15 counts all started blocks.",
    "hintZh": "当超出 m 分钟且 m 为正数时，(m + 14) // 15 可算出已开始的收费时段数。",
    "level": "Medium",
    "topic": "Conditional arithmetic",
    "starter": "minutes = int(input())\n",
    "solution": "minutes = int(input())\nfee = 12\nif minutes > 30:\n    fee += 5 * ((minutes - 30 + 14) // 15)\nif fee > 50:\n    fee = 50\nprint(fee)\n",
    "tests": [
      {
        "input": "46\n",
        "output": "22"
      },
      {
        "input": "30\n",
        "output": "12"
      },
      {
        "input": "31\n",
        "output": "17"
      },
      {
        "input": "45\n",
        "output": "17"
      },
      {
        "input": "135\n",
        "output": "47"
      },
      {
        "input": "136\n",
        "output": "50"
      },
      {
        "input": "1\n",
        "output": "12"
      }
    ],
    "topicZh": "条件运算"
  },
  {
    "id": "L2-5",
    "unit": "L2",
    "title": "Nearest grid mark",
    "titleZh": "最近刻度",
    "en": "A rail has marks at every multiple of a positive integer spacing S, including negative multiples and zero. Read an integer position P and then S on separate lines. Print the nearest mark to P. If two marks are equally close, choose the one with the smaller coordinate.",
    "zh": "一根导轨在正整数间距 S 的所有整数倍位置设有刻度，包含负数和 0。分两行读入整数位置 P 和间距 S。输出离 P 最近的刻度。如果两个刻度一样近，输出坐标较小的一个。",
    "hint": "Floor division also works to the left of zero. Use it to locate the mark at or below P, then compare the distances to its two neighbors around P.",
    "hintZh": "负坐标也可以用整除。先求出不超过 P 的最右刻度，再比较 P 到左右两个相邻刻度的距离。",
    "level": "Hard",
    "topic": "Floor division",
    "starter": "position = int(input())\nspacing = int(input())\n",
    "solution": "position = int(input())\nspacing = int(input())\nleft = (position // spacing) * spacing\nright = left + spacing\nif position - left <= right - position:\n    print(left)\nelse:\n    print(right)\n",
    "tests": [
      {
        "input": "16\n10\n",
        "output": "20"
      },
      {
        "input": "15\n10\n",
        "output": "10"
      },
      {
        "input": "-15\n10\n",
        "output": "-20"
      },
      {
        "input": "-14\n10\n",
        "output": "-10"
      },
      {
        "input": "-21\n7\n",
        "output": "-21"
      },
      {
        "input": "0\n8\n",
        "output": "0"
      }
    ],
    "topicZh": "向下整除"
  },
  {
    "id": "L2-6",
    "unit": "L2",
    "title": "Scale the pulse",
    "titleZh": "脉冲缩放",
    "en": "Read an integer A and a positive integer B on separate lines. Print the integer part of A / B after truncation toward zero. Both inputs have absolute value at most 1000.",
    "zh": "分两行读入整数 A 和正整数 B，绝对值均不超过 1000。输出 A / B 朝零截断后的整数。",
    "hint": "Compare int(-1.8) with -2.",
    "hintZh": "想一想 int(-1.8) 的值。",
    "level": "Easy",
    "topic": "Numeric conversion",
    "topicZh": "数值转换",
    "starter": "a = int(input())\nb = int(input())\n# Write your solution here.\n",
    "solution": "a = int(input())\nb = int(input())\nprint(int(a / b))\n",
    "tests": [
      {
        "input": "13\n4",
        "output": "3"
      },
      {
        "input": "-13\n4",
        "output": "-3"
      },
      {
        "input": "-3\n8",
        "output": "0"
      },
      {
        "input": "0\n2",
        "output": "0"
      },
      {
        "input": "12\n3",
        "output": "4"
      }
    ]
  },
  {
    "id": "L2-7",
    "unit": "L2",
    "title": "Overlap on a rail",
    "titleZh": "导轨区间重叠",
    "en": "The occupied sections of a rail are [a, b] and [c, d], with a ≤ b and c ≤ d. Read a, b, c and d as integers on four lines. Print OVERLAP for a common segment of positive length, TOUCH for exactly one common point, or CLEAR otherwise.",
    "zh": "两个占用区段分别为闭区间 [a, b] 和 [c, d]，满足 a ≤ b、c ≤ d。四行依次输入整数 a、b、c、d。公共区段长度为正时输出 OVERLAP，仅有一个公共点时输出 TOUCH，无交集时输出 CLEAR。",
    "hint": "Compare the later starting point with the earlier ending point.",
    "hintZh": "比较两个起点中较大的值和两个终点中较小的值。",
    "level": "Medium",
    "topic": "Interval decisions",
    "topicZh": "区间判断",
    "starter": "a = int(input())\nb = int(input())\nc = int(input())\nd = int(input())\n# Write your solution here.\n",
    "solution": "a = int(input())\nb = int(input())\nc = int(input())\nd = int(input())\nleft = max(a, c)\nright = min(b, d)\nif left < right:\n    print('OVERLAP')\nelif left == right:\n    print('TOUCH')\nelse:\n    print('CLEAR')\n",
    "tests": [
      {
        "input": "2\n9\n5\n7",
        "output": "OVERLAP"
      },
      {
        "input": "2\n5\n5\n8",
        "output": "TOUCH"
      },
      {
        "input": "-8\n-4\n0\n3",
        "output": "CLEAR"
      },
      {
        "input": "6\n6\n4\n8",
        "output": "TOUCH"
      }
    ]
  },
  {
    "id": "L2-8",
    "unit": "L2",
    "title": "Choose a winding",
    "titleZh": "选择线圈",
    "en": "Read three positive integers V, A and B on separate lines. Two resistors A and B may be connected in series (resistance A+B) or in parallel (resistance A*B/(A+B)). Find the connection that makes the resistance closer to V. Print SERIES, PARALLEL or TIE. Compare the distances exactly.",
    "zh": "三行依次输入正整数 V、A、B。电阻 A、B 串联时阻值为 A+B，并联时为 A*B/(A+B)。哪种连接的阻值更接近 V？输出 SERIES、PARALLEL 或 TIE。须精确比较距离。",
    "hint": "Multiply both distances by the same positive denominator before comparing.",
    "hintZh": "先把两个距离都乘以同一个正分母再比较。",
    "level": "Medium",
    "topic": "Operator precedence",
    "topicZh": "运算优先级",
    "starter": "v = int(input())\na = int(input())\nb = int(input())\n# Write your solution here.\n",
    "solution": "v = int(input())\na = int(input())\nb = int(input())\nden = a + b\nseries = abs(v - den) * den\nparallel = abs(v * den - a * b)\nif series < parallel:\n    print('SERIES')\nelif series > parallel:\n    print('PARALLEL')\nelse:\n    print('TIE')\n",
    "tests": [
      {
        "input": "7\n2\n6",
        "output": "SERIES"
      },
      {
        "input": "1\n2\n6",
        "output": "PARALLEL"
      },
      {
        "input": "5\n4\n4",
        "output": "TIE"
      },
      {
        "input": "3\n7\n1",
        "output": "PARALLEL"
      }
    ]
  },
  {
    "id": "L2-9",
    "unit": "L2",
    "title": "Unpack a panel code",
    "titleZh": "拆解面板编号",
    "en": "Read one integer between 100 and 999. Its middle digit is a selector. If the selector is even, print the sum of the first and last digits. Otherwise print their product.",
    "zh": "读入一个 100 到 999 的整数。十位是选择器。若十位为偶数，输出百位和个位之和；否则输出它们的乘积。",
    "hint": "Integer division by 10 removes the last digit.",
    "hintZh": "整除 10 会去掉末位数字。",
    "level": "Easy",
    "topic": "Digit extraction",
    "topicZh": "提取十进制位",
    "starter": "code = int(input())\n# Write your solution here.\n",
    "solution": "code = int(input())\nfirst = code // 100\nmiddle = code // 10 % 10\nlast = code % 10\nprint(first + last if middle % 2 == 0 else first * last)\n",
    "tests": [
      {
        "input": "427",
        "output": "11"
      },
      {
        "input": "437",
        "output": "28"
      },
      {
        "input": "190",
        "output": "0"
      },
      {
        "input": "100",
        "output": "1"
      }
    ]
  },
  {
    "id": "L2-10",
    "unit": "L2",
    "title": "February maintenance ticket",
    "titleZh": "二月维护工单",
    "en": "A maintenance ticket gives a year Y (1–9999) and a February day D (1–31), one integer per line. A leap year is divisible by 400, or divisible by 4 but not by 100. Reject a day outside that February with INVALID. For a valid ticket print the month and day of the following day as two integers. Combine the leap-year condition with a separate decision for crossing into March.",
    "zh": "维护工单分两行给出年份 Y（1–9999）与二月的日期 D（1–31）。能被 400 整除，或能被 4 整除但不能被 100 整除的年份是闰年。若该年二月不存在这一天，输出 INVALID。否则以两个整数输出次日的月份与日。先用布尔条件判断闰年，再决定次日是否跨入三月。",
    "hint": "Use one variable for the last valid day. Compare D with it before adding one.",
    "hintZh": "用一个变量记录当年二月的最后一天，给 D 加一之前先比较。",
    "level": "Medium",
    "topic": "Recap · Boolean logic and calendar arithmetic",
    "topicZh": "综合 · 布尔逻辑与日期运算",
    "starter": "year = int(input())\nday = int(input())\n# Write your solution here.\n",
    "solution": "year = int(input())\nday = int(input())\nleap = year % 400 == 0 or (year % 4 == 0 and year % 100 != 0)\nlast = 29 if leap else 28\nif day > last:\n    print('INVALID')\nelif day == last:\n    print(3, 1)\nelse:\n    print(2, day + 1)\n",
    "tests": [
      {
        "input": "2000\n28",
        "output": "2 29"
      },
      {
        "input": "1900\n29",
        "output": "INVALID"
      },
      {
        "input": "2024\n29",
        "output": "3 1"
      },
      {
        "input": "2025\n28",
        "output": "3 1"
      },
      {
        "input": "2025\n1",
        "output": "2 2"
      },
      {
        "input": "2000\n30",
        "output": "INVALID"
      }
    ],
    "recap": true
  },
  {
    "id": "L3-1",
    "unit": "L3",
    "title": "First rise",
    "titleZh": "首次升温",
    "en": "A logger takes N temperature readings. Read N (1–100) followed by N integers, one value per line. Print the 1-based reading number of the first reading that is higher than the immediately preceding one. Print 0 if the temperature never rises.",
    "zh": "记录仪共测温 N 次。先读入 N（1–100），再读入 N 个整数，每行一个。找出第一次比前一次温度更高的读数，输出其从 1 开始的序号。如果从未升温，输出 0。",
    "hint": "Keep the previous reading. Equal readings do not count as a rise.",
    "hintZh": "记住前一次读数。相等的两个读数不算升温。",
    "level": "Easy",
    "topic": "Loop state",
    "starter": "count = int(input())\nprevious = int(input())\n",
    "solution": "count = int(input())\nprevious = int(input())\nfirst_rise = 0\nfor number in range(2, count + 1):\n    current = int(input())\n    if first_rise == 0 and current > previous:\n        first_rise = number\n    previous = current\nprint(first_rise)\n",
    "tests": [
      {
        "input": "5\n9\n8\n8\n10\n11\n",
        "output": "4"
      },
      {
        "input": "1\n-2\n",
        "output": "0"
      },
      {
        "input": "4\n4\n4\n2\n1\n",
        "output": "0"
      },
      {
        "input": "3\n-4\n-2\n-1\n",
        "output": "2"
      }
    ],
    "topicZh": "循环状态"
  },
  {
    "id": "L3-2",
    "unit": "L3",
    "title": "Two workshop rosters",
    "titleZh": "双组签到",
    "en": "Read the number of sign-ins for workshop A, then that many names, one per line. Next read the count and names for workshop B in the same format. Each count is 0–100. Names are case-sensitive and a name may repeat. Print two integers: the number of distinct people who attended both workshops and the number who attended exactly one workshop.",
    "zh": "先读入讲习班 A 的签到条数，再逐行读入这些姓名。接着以相同格式读入 B 的签到条数和姓名。每组有 0–100 条记录，姓名区分大小写且可能重复。输出两个整数：两个班都参加的不同人数，以及恰好只参加一个班的不同人数，以空格分隔。",
    "hint": "Build one set per workshop. A duplicated sign-in should not add a person.",
    "hintZh": "每组各建立一个集合。同一人重复签到，只算作一个人。",
    "level": "Easy",
    "topic": "Sets",
    "starter": "group_a = set()\ngroup_b = set()\n# Read the two rosters.\n",
    "solution": "group_a = set()\nfor _ in range(int(input())):\n    group_a.add(input())\ngroup_b = set()\nfor _ in range(int(input())):\n    group_b.add(input())\nprint(len(group_a & group_b), len(group_a ^ group_b))\n",
    "tests": [
      {
        "input": "3\nAda\nKai\nKai\n2\nKai\nBo\n",
        "output": "1 2"
      },
      {
        "input": "0\n0\n",
        "output": "0 0"
      },
      {
        "input": "1\nMay\n2\nmay\nmay\n",
        "output": "0 2"
      },
      {
        "input": "2\nA\nB\n2\nB\nA\n",
        "output": "2 0"
      }
    ],
    "topicZh": "集合"
  },
  {
    "id": "L3-3",
    "unit": "L3",
    "title": "Part counter",
    "titleZh": "零件计数器",
    "en": "Scan N part labels and then look one up. Read N (0–200), the N scanned labels, and one query label, each on a separate line. Labels contain letters and are case-sensitive. Print the number of distinct scanned labels and the number of scans matching the query, separated by a space.",
    "zh": "扫描 N 个零件标签后，查询一个标签。先读入 N（0–200），再读入 N 个已扫描标签，最后读入待查询的标签，每项占一行。标签由字母组成且区分大小写。在一行内输出扫描到的不同标签数及查询标签的扫描次数，以空格分隔。",
    "hint": "Use each label as a dictionary key. Give unseen keys a starting count of zero.",
    "hintZh": "用标签作为字典的键，首次出现的标签从 0 开始计数。",
    "level": "Medium",
    "topic": "Dictionaries",
    "starter": "count = int(input())\nscans = {}\n",
    "solution": "count = int(input())\nscans = {}\nfor _ in range(count):\n    label = input()\n    scans[label] = scans.get(label, 0) + 1\nquery = input()\nprint(len(scans), scans.get(query, 0))\n",
    "tests": [
      {
        "input": "5\nBolt\nNut\nBolt\nPin\nBolt\nBolt\n",
        "output": "3 3"
      },
      {
        "input": "0\nPin\n",
        "output": "0 0"
      },
      {
        "input": "2\nPin\npin\nPIN\n",
        "output": "2 0"
      },
      {
        "input": "2\nA\nA\nA\n",
        "output": "1 2"
      }
    ],
    "topicZh": "字典"
  },
  {
    "id": "L3-4",
    "unit": "L3",
    "title": "Sentinel streak",
    "titleZh": "终止符前的连续记录",
    "en": "A meter sends one non-negative integer per line and then sends -1 to end the transmission. Find the longest uninterrupted sequence of readings that are at least 50. Print its length. The transmission may contain no readings before -1.",
    "zh": "仪表逐行传输非负整数，最后发送 -1 表示传输结束。找出读数连续大于或等于 50 的最长一段，输出该段的长度。-1 之前可能没有任何读数。",
    "hint": "Track two lengths: the streak that ends at the current reading, and the best seen so far.",
    "hintZh": "维护两个长度：截至当前读数的连续长度，以及迄今出现过的最大长度。",
    "level": "Medium",
    "topic": "While loops",
    "starter": "value = int(input())\n# Stop at -1.\n",
    "solution": "value = int(input())\nstreak = 0\nlongest = 0\nwhile value != -1:\n    if value >= 50:\n        streak += 1\n        if streak > longest:\n            longest = streak\n    else:\n        streak = 0\n    value = int(input())\nprint(longest)\n",
    "tests": [
      {
        "input": "52\n50\n8\n70\n80\n60\n-1\n",
        "output": "3"
      },
      {
        "input": "-1\n",
        "output": "0"
      },
      {
        "input": "49\n0\n-1\n",
        "output": "0"
      },
      {
        "input": "50\n50\n1\n51\n-1\n",
        "output": "2"
      }
    ],
    "topicZh": "while 循环"
  },
  {
    "id": "L3-5",
    "unit": "L3",
    "title": "Locker divisors",
    "titleZh": "储物柜翻牌",
    "en": "N lockers (numbered 1 through N) start closed. On pass k, toggle each locker whose number is a multiple of k. Run passes 1 through P inclusive, in order. Read N (1–100) and P (0–N) on separate lines. Print two integers: how many lockers are open, and the largest open locker number. If all are closed, print 0 0.",
    "zh": "N 个储物柜（编号从 1 至 N）起初全部关闭。第 k 轮，把编号为 k 的倍数的每个柜子切换一次开关状态。依次执行第 1 至第 P 轮（含第 P 轮）。分两行读入 N（1–100）和 P（0–N）。输出打开的柜子数和已打开的最大柜号，用空格分隔。全部关闭时输出 0 0。",
    "hint": "Use a Boolean list with an unused element at index 0. For pass k, range(k, N + 1, k) visits exactly the required lockers.",
    "hintZh": "用布尔列表记录开关状态，可以让下标 0 空置。第 k 轮用 range(k, N + 1, k) 遍历需要切换的柜号。",
    "level": "Hard",
    "topic": "Nested loops",
    "starter": "n = int(input())\npasses = int(input())\n",
    "solution": "n = int(input())\npasses = int(input())\nopened = [False] * (n + 1)\nfor k in range(1, passes + 1):\n    for number in range(k, n + 1, k):\n        opened[number] = not opened[number]\ncount = 0\nlargest = 0\nfor number in range(1, n + 1):\n    if opened[number]:\n        count += 1\n        largest = number\nprint(count, largest)\n",
    "tests": [
      {
        "input": "6\n2\n",
        "output": "3 5"
      },
      {
        "input": "10\n10\n",
        "output": "3 9"
      },
      {
        "input": "1\n0\n",
        "output": "0 0"
      },
      {
        "input": "7\n1\n",
        "output": "7 7"
      },
      {
        "input": "9\n3\n",
        "output": "4 7"
      }
    ],
    "topicZh": "嵌套循环"
  },
  {
    "id": "L3-6",
    "unit": "L3",
    "title": "Pass the inspection",
    "titleZh": "提前结束检查",
    "en": "Read N, then N integer readings on separate lines (N ≥ 0). Add consecutive readings from the start until the first negative reading. Print their sum and how many were added, separated by a space. Ignore all later readings.",
    "zh": "先读数量 N，再分 N 行读整数读数（N ≥ 0）。从头累加，遇到第一个负数就停止。依次输出已加读数之和与已加项数，以空格分隔，忽略其余读数。",
    "hint": "A zero counts as a reading.",
    "hintZh": "零也算作一项。",
    "level": "Easy",
    "topic": "Loop exits",
    "topicZh": "提前结束循环",
    "starter": "n = int(input())\n# Write your solution here.\n",
    "solution": "n = int(input())\ntotal = count = 0\nfor _ in range(n):\n    value = int(input())\n    if value < 0:\n        break\n    total += value\n    count += 1\nprint(total, count)\n",
    "tests": [
      {
        "input": "5\n2\n0\n7\n-1\n20",
        "output": "9 3"
      },
      {
        "input": "0",
        "output": "0 0"
      },
      {
        "input": "2\n-1\n3",
        "output": "0 0"
      },
      {
        "input": "2\n4\n8",
        "output": "12 2"
      }
    ]
  },
  {
    "id": "L3-7",
    "unit": "L3",
    "title": "The missing badge",
    "titleZh": "缺失的徽章",
    "en": "Read N ≥ 1 on line 1. The next line lists distinct badge numbers from 1 through N, separated by spaces. It may be blank. Print the smallest missing badge number, or COMPLETE if all are present.",
    "zh": "第一行读取 N ≥ 1，第二行输入取自 1 至 N 的不重复徽章编号，以空格分隔，该行可以为空。输出最小的缺失编号；若全部存在，输出 COMPLETE。",
    "hint": "Check candidates in numerical order, regardless of the input order.",
    "hintZh": "无论输入顺序怎样，都从小到大检查候选编号。",
    "level": "Easy",
    "topic": "Membership",
    "topicZh": "成员检查",
    "starter": "n = int(input())\npresent = set(map(int, input().split()))\n# Write your solution here.\n",
    "solution": "n = int(input())\npresent = set(map(int, input().split()))\nfor badge in range(1, n + 1):\n    if badge not in present:\n        print(badge)\n        break\nelse:\n    print('COMPLETE')\n",
    "tests": [
      {
        "input": "5\n5 1 4",
        "output": "2"
      },
      {
        "input": "3\n3 1 2",
        "output": "COMPLETE"
      },
      {
        "input": "1\n\n",
        "output": "1"
      },
      {
        "input": "4\n3 2 1",
        "output": "4"
      }
    ]
  },
  {
    "id": "L3-8",
    "unit": "L3",
    "title": "Crossing the target",
    "titleZh": "首次达到目标",
    "en": "Read a positive target, then a line of space-separated signed integer changes (possibly blank). Starting at zero, apply each change once in order. Print the 1-based index of the first change after which the total is at least the target. Print NEVER if this never occurs.",
    "zh": "先读正整数目标值，下一行读取空格分隔的整数变化量（可为空）。从零开始按顺序应用每次变化，输出首次使总值达到或超过目标的变化序号（从 1 开始）；若始终未达到，输出 NEVER。",
    "hint": "Test the total after updating it.",
    "hintZh": "先更新总值，再检查是否达到目标。",
    "level": "Medium",
    "topic": "Running totals",
    "topicZh": "逐项累加",
    "starter": "target = int(input())\nchanges = list(map(int, input().split()))\n# Write your solution here.\n",
    "solution": "target = int(input())\nchanges = list(map(int, input().split()))\ntotal = 0\nfor index, change in enumerate(changes, 1):\n    total += change\n    if total >= target:\n        print(index)\n        break\nelse:\n    print('NEVER')\n",
    "tests": [
      {
        "input": "5\n3 -1 3 -9",
        "output": "3"
      },
      {
        "input": "4\n4 -10",
        "output": "1"
      },
      {
        "input": "6\n-1 5 1",
        "output": "NEVER"
      },
      {
        "input": "1\n\n",
        "output": "NEVER"
      }
    ]
  },
  {
    "id": "L3-9",
    "unit": "L3",
    "title": "Last active station",
    "titleZh": "最后一次活跃的站点",
    "en": "Read N ≥ 0 followed by N one-word station names, one per line. Then read a station to look up. Print its first and last positions in the log (1-based), separated by a space. Print ABSENT if it never appears. Names are case-sensitive.",
    "zh": "读入 N ≥ 0，接着 N 行各有一个不含空格的站名。最后读入要查询的站名。以空格分隔输出该站第一次和最后一次出现的位置（从 1 开始）。从未出现则输出 ABSENT。区分大小写。",
    "hint": "Store the first position once, but update the last position every time.",
    "hintZh": "第一次出现的位置只存一次，每次出现都更新最后位置。",
    "level": "Medium",
    "topic": "Dictionary updates",
    "topicZh": "字典更新",
    "starter": "n = int(input())\n# Write your solution here.\n",
    "solution": "n = int(input())\nfirst = {}\nlast = {}\nfor i in range(1, n + 1):\n    name = input()\n    if name not in first:\n        first[name] = i\n    last[name] = i\nquery = input()\nif query in first:\n    print(first[query], last[query])\nelse:\n    print('ABSENT')\n",
    "tests": [
      {
        "input": "4\nA\nB\nA\nC\nA",
        "output": "1 3"
      },
      {
        "input": "2\na\nA\na",
        "output": "1 1"
      },
      {
        "input": "0\nX",
        "output": "ABSENT"
      },
      {
        "input": "3\nR\nQ\nT\nT",
        "output": "3 3"
      }
    ]
  },
  {
    "id": "L3-10",
    "unit": "L3",
    "title": "The return counter",
    "titleZh": "工具归还柜台",
    "en": "A tool counter starts with no items. Read N ≥ 0, then N lines of the form name delta, where name is a one-word tool name and delta is a nonzero integer. Process entries in order. A positive change adds items. Reject an entire negative change if it would make that tool’s balance negative, otherwise apply it. Print the number of rejected changes, the number of tool names with positive final balances, and the total remaining items on one line. Use the same balance for every occurrence of a name.",
    "zh": "工具柜台初始为空。先读 N ≥ 0，再读 N 行 name delta，工具名为单个单词，变化量为非零整数。按顺序处理：正数增加库存，负数减少库存。若一次减少会使该工具库存变为负数，则整笔拒绝，否则照常执行。最后一行依次输出被拒笔数、库存仍为正的工具种类数及剩余工具总件数。相同名称须更新同一项余额。",
    "hint": "Look up the current count before deciding whether the proposed count may replace it.",
    "hintZh": "先查已有库存，再判断新库存能否替换旧值。",
    "level": "Medium",
    "topic": "Recap · loops, dictionaries and conditions",
    "topicZh": "综合 · 循环、字典与条件",
    "starter": "n = int(input())\nbalances = {}\n# Write your solution here.\n",
    "solution": "n = int(input())\nbalances = {}\nrejected = 0\nfor _ in range(n):\n    name, raw_delta = input().split()\n    proposed = balances.get(name, 0) + int(raw_delta)\n    if proposed < 0:\n        rejected += 1\n    else:\n        balances[name] = proposed\nprint(rejected, sum(x > 0 for x in balances.values()), sum(balances.values()))\n",
    "tests": [
      {
        "input": "6\nwrench 3\nbit -1\nwrench -4\nbit 2\nwrench -3\nbit 1",
        "output": "2 1 3"
      },
      {
        "input": "0",
        "output": "0 0 0"
      },
      {
        "input": "2\nx 4\nx -4",
        "output": "0 0 0"
      },
      {
        "input": "3\nx -7\nx 2\ny 3",
        "output": "1 2 5"
      }
    ],
    "recap": true
  },
  {
    "id": "L4-1",
    "unit": "L4",
    "title": "Unweave the channels",
    "titleZh": "拆分交错信道",
    "en": "A recorder interleaves two channels into one nonempty string of letters. Channel A occupies positions 0, 2, 4, … and channel B occupies positions 1, 3, 5, …. Read the string. Print A followed by a slash and B, with no spaces. Keep each channel in its original order. If B is empty, still print the slash.",
    "zh": "记录仪把两个信道的内容交错写成一个非空字母串。信道 A 占用下标 0、2、4……，信道 B 占用下标 1、3、5……。读入字符串，按原顺序分别取出两个信道，在一行依次输出 A 的内容、斜杠和 B 的内容，斜杠两侧不留空格。B 为空时也要输出斜杠。",
    "hint": "Try two slices with step 2. Choose the first index independently for each slice.",
    "hintZh": "试试两个步长为 2 的切片，为每个切片选择不同的起始下标。",
    "level": "Easy",
    "topic": "Stepped slices",
    "starter": "signal = input()\n",
    "solution": "signal = input()\nprint(signal[::2] + \"/\" + signal[1::2])\n",
    "tests": [
      {
        "input": "AqBrCs\n",
        "output": "ABC/qrs"
      },
      {
        "input": "x\n",
        "output": "x/"
      },
      {
        "input": "abC\n",
        "output": "aC/b"
      },
      {
        "input": "mNOPq\n",
        "output": "mOq/NP"
      }
    ],
    "topicZh": "步长切片"
  },
  {
    "id": "L4-2",
    "unit": "L4",
    "title": "Bench-label printer",
    "titleZh": "工作台标签",
    "en": "A label printer receives a room name on the first line and a bench number (0–999) on the second. Remove any leading and trailing spaces in the room name, convert its letters to uppercase and replace each run of internal spaces with a single hyphen. Print the processed room name, a slash and the bench number padded to three digits with leading zeros. The room name contains at least one word and only ASCII letters and spaces.",
    "zh": "标签机从第一行读取房间名，第二行读取工作台编号（0–999）。去掉房间名前后的空格，将所有字母转为大写，并把中间每一处连续空格换成一个连字符。输出处理后的房间名、一个斜杠和左侧补零至三位的编号，三者紧接。房间名只含英文字母和空格，至少有一个单词。",
    "hint": "Calling split() without arguments collapses runs of whitespace. Use join() and a three-digit integer format.",
    "hintZh": "不带参数的 split() 会处理连续空白。用 join() 重新连接，并将整数格式化为三位。",
    "level": "Easy",
    "topic": "String formatting",
    "starter": "room = input()\nbench = int(input())\n",
    "solution": "room = input()\nbench = int(input())\nlabel = \"-\".join(room.upper().split())\nprint(f\"{label}/{bench:03d}\")\n",
    "tests": [
      {
        "input": "  signal   lab  \n7\n",
        "output": "SIGNAL-LAB/007"
      },
      {
        "input": "a\n0\n",
        "output": "A/000"
      },
      {
        "input": "East WING\n12\n",
        "output": "EAST-WING/012"
      },
      {
        "input": "test\n999\n",
        "output": "TEST/999"
      }
    ],
    "topicZh": "字符串格式化"
  },
  {
    "id": "L4-3",
    "unit": "L4",
    "title": "Mirror check",
    "titleZh": "镜像检测",
    "en": "A label scanner ignores punctuation and letter case. Read one line of ASCII text. Keep only letters and digits, then compare the resulting lowercase string with its reverse. Print MATCH when they are identical and DIFFERENT otherwise. An empty cleaned string counts as a match.",
    "zh": "标签扫描器忽略标点及字母大小写。读入一行 ASCII 文本，仅保留字母和数字并转为小写，然后将结果与倒序字符串比较。相同输出 MATCH，否则输出 DIFFERENT。清理后为空串也算匹配。",
    "hint": "Build a new string by keeping each character for which isalnum() is true.",
    "hintZh": "逐个检查字符，用 isalnum() 筛选出需要保留的字符，拼成新字符串。",
    "level": "Medium",
    "topic": "Palindromes",
    "starter": "label = input()\n",
    "solution": "label = input()\nclean = \"\"\nfor char in label:\n    if char.isalnum():\n        clean += char.lower()\nif clean == clean[::-1]:\n    print(\"MATCH\")\nelse:\n    print(\"DIFFERENT\")\n",
    "tests": [
      {
        "input": "Step on no pets!\n",
        "output": "MATCH"
      },
      {
        "input": "No. 12\n",
        "output": "DIFFERENT"
      },
      {
        "input": "-.\n",
        "output": "MATCH"
      },
      {
        "input": "R2-2r\n",
        "output": "MATCH"
      },
      {
        "input": "a1a2\n",
        "output": "DIFFERENT"
      }
    ],
    "topicZh": "回文串"
  },
  {
    "id": "L4-4",
    "unit": "L4",
    "title": "Shift dial",
    "titleZh": "字母移位盘",
    "en": "Read an integer shift (it may be negative) on line 1 and a nonempty ASCII message on line 2. Move every letter forward by the shift in its own 26-letter alphabet, wrapping around and preserving case. Leave every other character unchanged. Print the resulting message.",
    "zh": "第一行读入一个整数偏移量（可为负），第二行读入非空的 ASCII 消息。正数表示沿字母表顺序移动（偏移 1 时，A 变为 B），负数表示反向移动。越过首尾时循环，保持原有大小写。其余字符原样保留。输出处理后的消息。",
    "hint": "Subtract ord(\"A\") or ord(\"a\") to convert a letter to 0–25, then add the shift and reduce modulo 26.",
    "hintZh": "减去 ord(\"A\") 或 ord(\"a\")，将字母映射到 0–25。加上偏移量后对 26 取余。",
    "level": "Medium",
    "topic": "Character codes",
    "starter": "shift = int(input())\nmessage = input()\n",
    "solution": "shift = int(input())\nmessage = input()\nresult = \"\"\nfor char in message:\n    if \"A\" <= char <= \"Z\":\n        base = ord(\"A\")\n    elif \"a\" <= char <= \"z\":\n        base = ord(\"a\")\n    else:\n        result += char\n        continue\n    result += chr(base + (ord(char) - base + shift) % 26)\nprint(result)\n",
    "tests": [
      {
        "input": "2\nYard 9!\n",
        "output": "Actf 9!"
      },
      {
        "input": "-1\nAa Zz\n",
        "output": "Zz Yy"
      },
      {
        "input": "52\nA-0/z\n",
        "output": "A-0/z"
      },
      {
        "input": "27\nZz\n",
        "output": "Aa"
      },
      {
        "input": "-53\nbB\n",
        "output": "aA"
      }
    ],
    "topicZh": "字符编码"
  },
  {
    "id": "L4-5",
    "unit": "L4",
    "title": "Directory insertion",
    "titleZh": "名录插入",
    "en": "Read N (0–50), then N names already sorted by lowercase spelling, then a new name, all on separate lines. Each name is a nonempty sequence of ASCII letters. Insert the new name after all names with the same lowercase spelling, keeping the directory sorted. Print the 1-based position of the insertion on line 1, and the complete directory joined by commas with no spaces on line 2. Preserve the original case of every name.",
    "zh": "逐行读入 N（0–50）、N 个已按小写拼写顺序排好的姓名，以及一个新姓名。每个姓名均为非空英文字母串。将新姓名插入原名录，保持排序；小写拼写相同时，新姓名排在所有同名项之后。第一行输出插入位置（从 1 开始），第二行输出整个名录，姓名间用逗号连接且不留空格。保留姓名原本的大小写。",
    "hint": "Stop at the first existing name whose lowercase spelling is strictly greater than the new one.",
    "hintZh": "从头扫描，找到第一个小写拼写严格大于新姓名的条目。",
    "level": "Hard",
    "topic": "String comparison",
    "starter": "count = int(input())\nnames = []\n",
    "solution": "count = int(input())\nnames = []\nfor _ in range(count):\n    names.append(input())\nnew_name = input()\npos = 0\nwhile pos < count and names[pos].lower() <= new_name.lower():\n    pos += 1\nnames.insert(pos, new_name)\nprint(pos + 1)\nprint(\",\".join(names))\n",
    "tests": [
      {
        "input": "3\nAda\nBO\nBo\nbo\n",
        "output": "4\nAda,BO,Bo,bo"
      },
      {
        "input": "0\nMay\n",
        "output": "1\nMay"
      },
      {
        "input": "2\nBob\nCal\nAda\n",
        "output": "1\nAda,Bob,Cal"
      },
      {
        "input": "2\nAmy\nJo\nBea\n",
        "output": "2\nAmy,Bea,Jo"
      }
    ],
    "topicZh": "字符串比较"
  },
  {
    "id": "L4-6",
    "unit": "L4",
    "title": "Count the stencil",
    "titleZh": "统计模板匹配",
    "en": "Read a text and a nonempty pattern, one per line. Count the starting positions at which the whole pattern appears in the text, including overlapping occurrences. Matching is case-sensitive; spaces are characters.",
    "zh": "两行分别读入文本与非空模式串。统计整个模式串出现在文本中的起始位置数，允许匹配重叠。大小写有别，空格也参与匹配。",
    "hint": "After a match, the next possible start is only one character later.",
    "hintZh": "匹配一次后，下一个候选起点只往后移一位。",
    "level": "Medium",
    "topic": "Overlapping substrings",
    "topicZh": "可重叠的子串",
    "starter": "text = input()\npattern = input()\n# Write your solution here.\n",
    "solution": "text = input()\npattern = input()\ncount = 0\nfor i in range(len(text) - len(pattern) + 1):\n    if text[i:i + len(pattern)] == pattern:\n        count += 1\nprint(count)\n",
    "tests": [
      {
        "input": "ababa\naba",
        "output": "2"
      },
      {
        "input": "aaaa\naa",
        "output": "3"
      },
      {
        "input": "AbA\na",
        "output": "0"
      },
      {
        "input": "\nx",
        "output": "0"
      },
      {
        "input": "a a a\na a",
        "output": "2"
      }
    ]
  },
  {
    "id": "L4-7",
    "unit": "L4",
    "title": "A label with two ends",
    "titleZh": "取标签两端",
    "en": "Read a nonempty label on line 1 and an integer K from 1 to its length on line 2. Print the Kth character from the left, then the Kth character from the right, on separate lines. A label consists of letters and digits.",
    "zh": "第一行读入由字母、数字组成的非空标签，第二行读入 K，范围为 1 到标签长度。分别输出从左边数第 K 个字符和从右边数第 K 个字符，每个一行。",
    "hint": "The first position from the right has Python index -1.",
    "hintZh": "从右边数的第一位在 Python 中的索引为 -1。",
    "level": "Easy",
    "topic": "Negative indexing",
    "topicZh": "负索引",
    "starter": "label = input()\nk = int(input())\n# Write your solution here.\n",
    "solution": "label = input()\nk = int(input())\nprint(label[k - 1])\nprint(label[-k])\n",
    "tests": [
      {
        "input": "Ax47K\n2",
        "output": "x\n7"
      },
      {
        "input": "T\n1",
        "output": "T\nT"
      },
      {
        "input": "abc\n3",
        "output": "c\na"
      },
      {
        "input": "121\n2",
        "output": "2\n2"
      }
    ]
  },
  {
    "id": "L4-8",
    "unit": "L4",
    "title": "Separate the header",
    "titleZh": "分离报文头",
    "en": "Read one line of text. Split it at the first equals sign. Print the left and right parts on separate lines, stripping outer whitespace from each. Print (empty) for an empty part. If there is no equals sign, print only INVALID.",
    "zh": "读入一行文本，在第一个等号处分开。两行依次输出左右部分，去掉各部分两端的空白。空部分输出 (empty)。如果找不到等号，只输出 INVALID。",
    "hint": "Only the first separator is structural. Later equals signs belong to the value.",
    "hintZh": "仅第一个等号用于分隔，后面的等号都属于右边的值。",
    "level": "Medium",
    "topic": "Finding delimiters",
    "topicZh": "查找分隔符",
    "starter": "line = input()\n# Write your solution here.\n",
    "solution": "line = input()\nposition = line.find('=')\nif position == -1:\n    print('INVALID')\nelse:\n    print(line[:position].strip() or '(empty)')\n    print(line[position + 1:].strip() or '(empty)')\n",
    "tests": [
      {
        "input": " mode = A=B ",
        "output": "mode\nA=B"
      },
      {
        "input": " = x",
        "output": "(empty)\nx"
      },
      {
        "input": "END=",
        "output": "END\n(empty)"
      },
      {
        "input": "none",
        "output": "INVALID"
      },
      {
        "input": "=",
        "output": "(empty)\n(empty)"
      }
    ]
  },
  {
    "id": "L4-9",
    "unit": "L4",
    "title": "The folded message",
    "titleZh": "折行报文",
    "en": "Read a positive line width W, then a nonempty message containing only letters and digits. Print the message in consecutive groups of W characters, one group per line. Pad the final group on the right with dots to exactly W characters.",
    "zh": "先读入正整数行宽 W，再读入仅由字母和数字组成的非空报文。以 W 个字符为一组按顺序逐行输出；若最后一组不足 W 位，则在右边补点号至正好 W 位。",
    "hint": "Use a range whose step is the width. Check how many characters the last slice contains.",
    "hintZh": "循环步长取行宽，检查最后一次切片的长度。",
    "level": "Medium",
    "topic": "Fixed-width slices",
    "topicZh": "定宽切片",
    "starter": "width = int(input())\nmessage = input()\n# Write your solution here.\n",
    "solution": "width = int(input())\nmessage = input()\nfor start in range(0, len(message), width):\n    part = message[start:start + width]\n    print(part + '.' * (width - len(part)))\n",
    "tests": [
      {
        "input": "3\nABCDEFG",
        "output": "ABC\nDEF\nG.."
      },
      {
        "input": "2\nABCD",
        "output": "AB\nCD"
      },
      {
        "input": "4\nQ",
        "output": "Q..."
      },
      {
        "input": "1\na3",
        "output": "a\n3"
      }
    ]
  },
  {
    "id": "L4-10",
    "unit": "L4",
    "title": "Recover a mirrored packet",
    "titleZh": "还原镜像报文",
    "en": "A receiver gets one line label|payload. The label contains ASCII letters with possible outer spaces, and is nonempty after stripping. The payload contains uppercase ASCII letters and may be empty. The sender shifted each original payload letter forward by the length of the stripped label (wrapping Z to A), then reversed the whole payload. Restore the original payload and print UPPERCASE_LABEL|original. Count only the characters of the stripped label when undoing the shift.",
    "zh": "接收器读入一行 label|payload。标签由英文字母和可能的首尾空格组成，去除空格后非空。载荷由大写英文字母组成，可以为空。发送方先把原载荷中每个字母向后移动标签去空格后的长度（Z 后回到 A），再反转载荷。还原后输出 大写标签|原载荷。逆移位时只用去空格后的标签长度。",
    "hint": "Split the two fields before trimming the label. Reverse the payload, then subtract the shift modulo 26.",
    "hintZh": "先拆字段再去掉标签首尾空格。把载荷逆序，再按模 26 减去移位量。",
    "level": "Medium",
    "topic": "Recap · fields, slicing and character codes",
    "topicZh": "综合 · 字段解析、切片与字符编码",
    "starter": "packet = input()\n# Write your solution here.\n",
    "solution": "packet = input()\nlabel, payload = packet.split('|')\nlabel = label.strip().upper()\ndecoded = []\nfor ch in payload[::-1]:\n    index = (ord(ch) - ord('A') - len(label)) % 26\n    decoded.append(chr(ord('A') + index))\nprint(label + '|' + ''.join(decoded))\n",
    "tests": [
      {
        "input": " lab |CB",
        "output": "LAB|YZ"
      },
      {
        "input": "x|A",
        "output": "X|Z"
      },
      {
        "input": " AB |",
        "output": "AB|"
      },
      {
        "input": "tag|GFED",
        "output": "TAG|ABCD"
      },
      {
        "input": "abcdefghijklmnopqrstuvwxyz|ZY",
        "output": "ABCDEFGHIJKLMNOPQRSTUVWXYZ|YZ"
      }
    ],
    "recap": true
  },
  {
    "id": "L5-1",
    "unit": "L5",
    "title": "Clean readings",
    "titleZh": "筛选读数",
    "en": "Read a nonempty line of space-separated integers. Negative values flag invalid readings. Print all non-negative readings in their original order, separated by single spaces, on line 1. If none are valid, print EMPTY there. On line 2 print the count of invalid readings. Keep all repeated valid values.",
    "zh": "读入一行由空格分隔的整数，至少有一个数。负数代表无效读数。第一行按原顺序输出所有非负读数，以单个空格分隔；若没有有效读数，则在第一行输出 EMPTY。第二行输出无效读数的数量。保留所有重复的有效读数。",
    "hint": "Build a filtered list instead of removing values during iteration. Compare its length with the original length.",
    "hintZh": "用筛选结果构造新列表，避免在遍历时删除元素。比较新旧列表长度。",
    "level": "Easy",
    "topic": "List comprehensions",
    "starter": "readings = [int(item) for item in input().split()]\n",
    "solution": "readings = [int(item) for item in input().split()]\nvalid = [value for value in readings if value >= 0]\nif valid:\n    print(*valid)\nelse:\n    print(\"EMPTY\")\nprint(len(readings) - len(valid))\n",
    "tests": [
      {
        "input": "4 -2 -1 4 0\n",
        "output": "4 4 0\n2"
      },
      {
        "input": "-2 -3\n",
        "output": "EMPTY\n2"
      },
      {
        "input": "0\n",
        "output": "0\n0"
      },
      {
        "input": "1 2 3\n",
        "output": "1 2 3\n0"
      }
    ],
    "topicZh": "列表推导式"
  },
  {
    "id": "L5-2",
    "unit": "L5",
    "title": "Traverse log",
    "titleZh": "位移记录",
    "en": "Read N (0–100), followed by N lines containing two space-separated integers dx and dy. Each pair is a displacement from the current point, starting at (0, 0). Print the final x and y coordinates followed by the largest Manhattan distance from the origin reached at the start or just after any complete move. The Manhattan distance is |x| + |y|. Print the three numbers on one line.",
    "zh": "读入 N（0–100），随后 N 行各有两个整数 dx 和 dy，以空格分隔。每一对整数表示从当前位置出发的一次位移，初始位置为 (0, 0)。在同一行依次输出最终的 x、y 坐标，以及所有记录位置（含起点和每次完整移动后的终点）到原点的最大曼哈顿距离。曼哈顿距离等于 |x| + |y|。",
    "hint": "Unpack each input pair into dx and dy. Update both coordinates before calculating the distance.",
    "hintZh": "把每一行解包为 dx 和 dy。更新两个坐标后再计算距离。",
    "level": "Medium",
    "topic": "Tuple unpacking",
    "starter": "count = int(input())\nx, y = 0, 0\n",
    "solution": "count = int(input())\nx, y = 0, 0\nfarthest = 0\nfor _ in range(count):\n    dx, dy = map(int, input().split())\n    x += dx\n    y += dy\n    farthest = max(farthest, abs(x) + abs(y))\nprint(x, y, farthest)\n",
    "tests": [
      {
        "input": "3\n2 -3\n-1 0\n0 3\n",
        "output": "1 0 5"
      },
      {
        "input": "0\n",
        "output": "0 0 0"
      },
      {
        "input": "2\n-2 -4\n2 4\n",
        "output": "0 0 6"
      },
      {
        "input": "1\n0 -7\n",
        "output": "0 -7 7"
      }
    ],
    "topicZh": "元组解包"
  },
  {
    "id": "L5-3",
    "unit": "L5",
    "title": "Repeatable dice log",
    "titleZh": "可重现的掷骰记录",
    "en": "Read an integer seed and a roll count N (0–100), one per line. Call random.seed(seed) once. Generate exactly N rolls, each with random.randint(1, 6), in order. Print the total of all rolls and the number of sixes, separated by one space. Use Python’s random module and make no extra random draws.",
    "zh": "分两行读入整数随机种子和掷骰次数 N（0–100）。先调用一次 random.seed(seed)，再依序调用 N 次 random.randint(1, 6) 得到点数。在一行内输出点数总和与出现 6 的次数，用空格分隔。使用 Python 的 random 模块，全程只进行规定次数的随机抽取。",
    "hint": "One seed initializes the sequence for the entire experiment. Store the rolls or update two counters as you go.",
    "hintZh": "开始前只设置一次种子。你可以保存每次点数，也可以边生成边累计。",
    "level": "Medium",
    "topic": "Random module",
    "starter": "import random\n\nseed = int(input())\ncount = int(input())\n",
    "solution": "import random\n\nseed = int(input())\ncount = int(input())\nrandom.seed(seed)\nrolls = [random.randint(1, 6) for _ in range(count)]\nprint(sum(rolls), rolls.count(6))\n",
    "tests": [
      {
        "input": "7\n6\n",
        "output": "17 1"
      },
      {
        "input": "11\n1\n",
        "output": "4 0"
      },
      {
        "input": "0\n0\n",
        "output": "0 0"
      },
      {
        "input": "17\n4\n",
        "output": "15 0"
      },
      {
        "input": "2\n8\n",
        "output": "23 2"
      }
    ],
    "topicZh": "random 模块"
  },
  {
    "id": "L5-4",
    "unit": "L5",
    "title": "Repair the snapshot",
    "titleZh": "修复快照",
    "en": "A bench stores its two rows of settings as a nested list. The starter takes a snapshot before editing one value, but the snapshot changes too. Fix it. Input: two lines of space-separated integers (each row has at least one value), followed by one line containing row, column and replacement value. Indices start at 0 and are valid. On line 1 print the selected snapshot row; on line 2 print the selected live row after the edit. Use single spaces between integers.",
    "zh": "工作台把两行设置存放在嵌套列表中。起始代码在修改一个值前建立快照，但快照也跟着改变了。请修复。输入的前两行各有至少一个以空格分隔的整数，第三行给出行下标、列下标与替换值，三个整数以空格分隔。下标从 0 开始且保证有效。第一行输出快照中被选中的一行，第二行输出修改后的实时数据中对应的一行，整数之间以单个空格分隔。",
    "hint": "An outer slice creates another outer list. Check which objects the two outer lists still share.",
    "hintZh": "切片只复制外层列表。想一想：两个外层列表里的元素仍然指向哪些对象？",
    "level": "Hard",
    "topic": "Nested list copies",
    "starter": "live = [list(map(int, input().split())) for _ in range(2)]\nsnapshot = live[:]  # Repair this snapshot.\nrow, col, value = map(int, input().split())\nlive[row][col] = value\nprint(*snapshot[row])\nprint(*live[row])\n",
    "solution": "live = [list(map(int, input().split())) for _ in range(2)]\nsnapshot = [row[:] for row in live]\nrow, col, value = map(int, input().split())\nlive[row][col] = value\nprint(*snapshot[row])\nprint(*live[row])\n",
    "tests": [
      {
        "input": "2 4\n3 5\n1 0 9\n",
        "output": "3 5\n9 5"
      },
      {
        "input": "7\n10 11 12\n0 0 -1\n",
        "output": "7\n-1"
      },
      {
        "input": "0 0\n0 0\n1 1 1\n",
        "output": "0 0\n0 1"
      },
      {
        "input": "9 3\n2\n0 1 3\n",
        "output": "9 3\n9 3"
      }
    ],
    "topicZh": "嵌套列表复制"
  },
  {
    "id": "L5-5",
    "unit": "L5",
    "title": "Read the instrument file",
    "titleZh": "仪器文件汇总",
    "en": "An instrument file contains N lines. Each line is either one signed integer (possibly surrounded by spaces), whitespace only, or a comment whose first non-space character is #. The provided starter creates readings.txt from standard input: give N (0–100), then the N lines. Keep that setup and complete the file reader. Open readings.txt in read mode and print the number of numeric lines and their integer sum, separated by one space.",
    "zh": "仪器文件有 N 行。每行可能是一个整数（正负均可，两侧可有空格）、仅含空白的行，或去掉行首空格后以 # 开头的注释。起始代码用标准输入创建 readings.txt：先输入 N（0–100），再输入 N 行文件内容。保留这段准备代码并补全文件读取部分。以读取模式打开 readings.txt，在一行输出数值行数和这些整数的总和，以一个空格分隔。",
    "hint": "Iterate over the open file. Strip each line before checking whether it is empty or begins with #.",
    "hintZh": "遍历已打开的文件，先对每行调用 strip()，再判断是否为空或以 # 开头。",
    "level": "Medium",
    "topic": "Text files",
    "starter": "with open(\"readings.txt\", \"w\", encoding=\"utf-8\") as stream:\n    for _ in range(int(input())):\n        stream.write(input() + \"\\n\")\n\n# Open readings.txt for reading and calculate the summary.\n",
    "solution": "with open(\"readings.txt\", \"w\", encoding=\"utf-8\") as stream:\n    for _ in range(int(input())):\n        stream.write(input() + \"\\n\")\n\ncount = 0\ntotal = 0\nwith open(\"readings.txt\", \"r\", encoding=\"utf-8\") as stream:\n    for line in stream:\n        value = line.strip()\n        if value and not value.startswith(\"#\"):\n            count += 1\n            total += int(value)\nprint(count, total)\n",
    "tests": [
      {
        "input": "5\n # start\n  12\n\n-7\n0\n",
        "output": "3 5"
      },
      {
        "input": "0\n",
        "output": "0 0"
      },
      {
        "input": "3\n# test\n   \n #end\n",
        "output": "0 0"
      },
      {
        "input": "2\n+4\n -10  \n",
        "output": "2 -6"
      }
    ],
    "topicZh": "文本文件"
  },
  {
    "id": "L5-6",
    "unit": "L5",
    "title": "Sample in a stack",
    "titleZh": "后进先出的样本",
    "en": "Read N ≥ 0, then N lines. Each is PUSH word or POP. Start with an empty stack. For each POP, print the most recently pushed word still present and remove it. Print EMPTY if nothing is present. Finally print the number of remaining words on its own line.",
    "zh": "先读取 N ≥ 0，接下来 N 行各为 PUSH 单词或 POP。初始栈为空。收到 POP 时弹出并输出尚在栈中的最后一个入栈单词；栈为空时输出 EMPTY。最后另起一行输出剩余单词数量。",
    "hint": "append adds one item at the end. pop without an index removes the last item.",
    "hintZh": "append 在末尾追加一项，不带索引的 pop 删除末项。",
    "level": "Medium",
    "topic": "List append and pop",
    "topicZh": "列表追加与弹出",
    "starter": "n = int(input())\nstack = []\n# Write your solution here.\n",
    "solution": "n = int(input())\nstack = []\nfor _ in range(n):\n    parts = input().split()\n    if parts[0] == 'PUSH':\n        stack.append(parts[1])\n    else:\n        print(stack.pop() if stack else 'EMPTY')\nprint(len(stack))\n",
    "tests": [
      {
        "input": "4\nPUSH red\nPUSH blue\nPOP\nPUSH gold",
        "output": "blue\n2"
      },
      {
        "input": "0",
        "output": "0"
      },
      {
        "input": "2\nPOP\nPOP",
        "output": "EMPTY\nEMPTY\n0"
      },
      {
        "input": "3\nPUSH X\nPOP\nPOP",
        "output": "X\nEMPTY\n0"
      }
    ]
  },
  {
    "id": "L5-7",
    "unit": "L5",
    "title": "Reverse the inspection pairs",
    "titleZh": "反转巡检记录对",
    "en": "Read N ≥ 1, then N lines each containing a station name (one word) and an integer reading. Store each pair as a tuple. In reverse input order, print one line per pair with the reading first and the name second, separated by one space.",
    "zh": "读入 N ≥ 1，后续 N 行各有一个不含空格的站名和一个整数读数。每一对存为元组。按输入的逆序逐行输出，先读数后站名，两者之间用一个空格分隔。",
    "hint": "Reverse the records as a sequence, then unpack each record.",
    "hintZh": "先按逆序遍历记录，再解包每一条记录。",
    "level": "Easy",
    "topic": "Tuple records",
    "topicZh": "元组记录",
    "starter": "n = int(input())\nrecords = []\n# Write your solution here.\n",
    "solution": "n = int(input())\nrecords = []\nfor _ in range(n):\n    name, reading = input().split()\n    records.append((name, int(reading)))\nfor name, reading in reversed(records):\n    print(reading, name)\n",
    "tests": [
      {
        "input": "3\nA 4\nB -1\nA 7",
        "output": "7 A\n-1 B\n4 A"
      },
      {
        "input": "1\nX 0",
        "output": "0 X"
      },
      {
        "input": "2\nX 1\nX 1",
        "output": "1 X\n1 X"
      },
      {
        "input": "2\nAA 010\na 2",
        "output": "2 a\n10 AA"
      }
    ]
  },
  {
    "id": "L5-8",
    "unit": "L5",
    "title": "Patch a schedule slice",
    "titleZh": "替换日程片段",
    "en": "Read three lines: a sequence of words, two integer bounds lo hi, and a replacement sequence of words. A sequence may be blank. Replace the slice from lo inclusive to hi exclusive with all replacement words. Assume 0 ≤ lo ≤ hi ≤ the original length. Print the new sequence separated by spaces, or EMPTY if it has no words.",
    "zh": "读入三行：初始单词序列、两个整数边界 lo hi、替换用的单词序列。序列可为空行。把从 lo（含）到 hi（不含）的切片替换成全部新单词。0 ≤ lo ≤ hi ≤ 初始长度。以空格分隔输出更新后的序列；序列为空则输出 EMPTY。",
    "hint": "A slice can be replaced by a longer or shorter list. What if its two bounds are equal?",
    "hintZh": "替换列表可以比原切片更长或更短。两个边界相等时会怎样？",
    "level": "Medium",
    "topic": "Slice assignment",
    "topicZh": "切片赋值",
    "starter": "words = input().split()\nlo, hi = map(int, input().split())\nreplacement = input().split()\n# Write your solution here.\n",
    "solution": "words = input().split()\nlo, hi = map(int, input().split())\nreplacement = input().split()\nwords[lo:hi] = replacement\nprint(' '.join(words) or 'EMPTY')\n",
    "tests": [
      {
        "input": "a b c d\n1 3\nX",
        "output": "a X d"
      },
      {
        "input": "x y\n0 0\nA B",
        "output": "A B x y"
      },
      {
        "input": "a\n0 1\n\n",
        "output": "EMPTY"
      },
      {
        "input": "\n0 0\nZ",
        "output": "Z"
      }
    ]
  },
  {
    "id": "L5-9",
    "unit": "L5",
    "title": "Append a lab note",
    "titleZh": "续写实验日志",
    "en": "Read N ≥ 0, then N complete lines of notes, then one extra line. A note line can be blank. Create notes.txt in write mode from the first N lines, giving each its own newline. Reopen in append mode to add the extra line. Read the file back and print two integers: its line count and its number of non-whitespace characters.",
    "zh": "先读 N ≥ 0，随后 N 行为已有日志，再读一行新增日志。日志行可为空。用写入模式创建 notes.txt，每条已有日志独占一行并加换行。以追加模式写入新增日志，再读回文件。输出文件行数与非空白字符数，以空格分隔。",
    "hint": "Iterating over a text file yields blank lines as well. str.isspace() recognizes whitespace.",
    "hintZh": "遍历文本文件也会读到空行，可用 str.isspace() 判断空白字符。",
    "level": "Medium",
    "topic": "File modes and lines",
    "topicZh": "文件模式与行",
    "starter": "n = int(input())\n# Write your solution here.\n",
    "solution": "n = int(input())\nwith open('notes.txt', 'w', encoding='utf-8') as f:\n    for _ in range(n):\n        print(input(), file=f)\nwith open('notes.txt', 'a', encoding='utf-8') as f:\n    print(input(), file=f)\nwith open('notes.txt', encoding='utf-8') as f:\n    lines = f.readlines()\nprint(len(lines), sum(not c.isspace() for line in lines for c in line))\n",
    "tests": [
      {
        "input": "2\na b\nc\ndd",
        "output": "3 5"
      },
      {
        "input": "0\n\n",
        "output": "1 0"
      },
      {
        "input": "1\n   \n X ",
        "output": "2 1"
      },
      {
        "input": "2\n1\n\n2 3",
        "output": "3 3"
      }
    ]
  },
  {
    "id": "L5-10",
    "unit": "L5",
    "title": "Rebuild the shift register",
    "titleZh": "重建班次记录",
    "en": "The starter writes N rows (1 ≤ N ≤ 100) to shifts.txt. Each row contains a one-word worker name and integer minutes. The last input line gives an index i (0-based) and a nonnegative deduction d. Read the file into a list of (name, minutes) tuples. Make a copy and replace just record i in the copy, subtracting d with a floor of zero. Print the name, its original minutes and its corrected minutes on the first line. Print the total original minutes and corrected minutes on the second line. All original minute counts are nonnegative.",
    "zh": "起始代码将 N 行（1 ≤ N ≤ 100）写入 shifts.txt，每行含一个单词表示的员工名和非负整数分钟数。最后一行输入零起始索引 i（有效）及非负扣减量 d。读回文件，将记录存成 (姓名, 分钟数) 元组列表。复制列表，仅在副本中替换第 i 条记录：减去 d，最低为零。第一行输出该员工姓名、原分钟数和修正分钟数；第二行依次输出全部记录修正前后的总分钟数。",
    "hint": "Immutable tuples can be shared safely while copying the list. Replace the whole tuple at one index in the copy.",
    "hintZh": "复制列表时可安全共享不可变元组。在副本的目标位置替换整条元组即可。",
    "level": "Medium",
    "topic": "Recap · file iteration, tuple records and copying",
    "topicZh": "综合 · 文件遍历、元组记录与复制",
    "starter": "n = int(input())\nwith open('shifts.txt', 'w', encoding='utf-8') as output:\n    for _ in range(n):\n        print(input(), file=output)\ni, deduction = map(int, input().split())\n# Write your solution here.\n",
    "solution": "n = int(input())\nwith open('shifts.txt', 'w', encoding='utf-8') as output:\n    for _ in range(n):\n        print(input(), file=output)\ni, deduction = map(int, input().split())\nrecords = []\nwith open('shifts.txt', encoding='utf-8') as source:\n    for line in source:\n        name, minutes = line.split()\n        records.append((name, int(minutes)))\nedited = records.copy()\nname, old = records[i]\nedited[i] = (name, max(0, old - deduction))\nprint(name, old, edited[i][1])\nprint(sum(m for _, m in records), sum(m for _, m in edited))\n",
    "tests": [
      {
        "input": "3\nMay 40\nLeo 15\nMay 10\n1 5",
        "output": "Leo 15 10\n65 60"
      },
      {
        "input": "1\nA 4\n0 10",
        "output": "A 4 0\n4 0"
      },
      {
        "input": "2\nA 0\nB 3\n0 9",
        "output": "A 0 0\n3 3"
      },
      {
        "input": "2\nA 4\nA 5\n1 0",
        "output": "A 5 5\n9 9"
      }
    ],
    "recap": true
  },
  {
    "id": "L6-1",
    "unit": "L6",
    "title": "Gauge limits",
    "en": "Write clamp(value, low=0, high=100). Return the nearest value in the closed interval [low, high]. Read one line containing either one integer (use both defaults) or three integers value low high, with low ≤ high. Print the returned integer.",
    "zh": "编写 clamp(value, low=0, high=100)，返回闭区间 [low, high] 内最接近 value 的数。输入一行，含一个整数（两个界限均用默认值），或三个整数 value low high，其中 low ≤ high。输出返回的整数。",
    "titleZh": "仪表读数限幅",
    "starter": "def clamp(value, low=0, high=100):\n    pass\n\n\nvalues = list(map(int, input().split()))\nprint(clamp(*values))\n",
    "solution": "def clamp(value, low=0, high=100):\n    if value < low:\n        return low\n    if value > high:\n        return high\n    return value\n\n\nvalues = list(map(int, input().split()))\nprint(clamp(*values))\n",
    "tests": [
      {
        "input": "130",
        "output": "100"
      },
      {
        "input": "-2",
        "output": "0"
      },
      {
        "input": "-2 -5 -2",
        "output": "-2"
      },
      {
        "input": "1 4 4",
        "output": "4"
      },
      {
        "input": "57",
        "output": "57"
      }
    ],
    "hint": "If the reading is already at a limit, keep it there.",
    "hintZh": "读数恰好等于边界时，保留原值。",
    "level": "Easy",
    "topic": "Default parameters",
    "topicZh": "默认参数"
  },
  {
    "id": "L6-2",
    "unit": "L6",
    "title": "Pack the sample trays",
    "en": "Write pack(samples, capacity) to return two integers: the number of fully filled trays and the number of loose samples. Read nonnegative samples and positive capacity on one line. Unpack the result in the caller and print the two values separated by a space.",
    "zh": "编写 pack(samples, capacity)，返回两个整数，分别为装满的托盘数和剩余样品数。一行输入非负整数 samples 和正整数 capacity。在调用处解包返回值，将两数用空格隔开输出。",
    "titleZh": "装满样品托盘",
    "starter": "def pack(samples, capacity):\n    pass\n\n\nsamples, capacity = map(int, input().split())\nfull, loose = pack(samples, capacity)\nprint(full, loose)\n",
    "solution": "def pack(samples, capacity):\n    return samples // capacity, samples % capacity\n\n\nsamples, capacity = map(int, input().split())\nfull, loose = pack(samples, capacity)\nprint(full, loose)\n",
    "tests": [
      {
        "input": "29 6",
        "output": "4 5"
      },
      {
        "input": "0 5",
        "output": "0 0"
      },
      {
        "input": "9 3",
        "output": "3 0"
      },
      {
        "input": "5 12",
        "output": "0 5"
      }
    ],
    "hint": "A full tray accounts for exactly capacity samples.",
    "hintZh": "每个装满的托盘恰好容纳 capacity 个样品。",
    "level": "Easy",
    "topic": "Tuple returns",
    "topicZh": "返回元组"
  },
  {
    "id": "L6-3",
    "unit": "L6",
    "title": "Audit a test table",
    "en": "A relay closes when low ≤ voltage < high. Implement closed(voltage, low, high), returning a Boolean. The first line gives three integers low high n (low < high, n ≥ 1). Each of the next n lines gives an integer voltage and a claimed result, 1 for closed or 0 for open. Print the 1-based positions of all incorrect claims in order, separated by spaces. Print PASS if every claim is correct.",
    "zh": "继电器在 low ≤ voltage < high 时闭合。编写返回布尔值的 closed(voltage, low, high)。第一行给出三个整数 low high n（low < high，n ≥ 1）。随后 n 行各给一个整数电压及一个预测值，1 表示闭合，0 表示断开。按输入顺序输出所有错误预测的行序号（从 1 开始），以空格分隔。若全对则输出 PASS。",
    "titleZh": "核对测试表",
    "starter": "def closed(voltage, low, high):\n    pass\n\n\nlow, high, n = map(int, input().split())\nwrong = []\nfor pos in range(1, n + 1):\n    voltage, claim = map(int, input().split())\n    if closed(voltage, low, high) != claim:\n        wrong.append(pos)\nprint(*wrong) if wrong else print(\"PASS\")\n",
    "solution": "def closed(voltage, low, high):\n    return low <= voltage < high\n\n\nlow, high, n = map(int, input().split())\nwrong = []\nfor pos in range(1, n + 1):\n    voltage, claim = map(int, input().split())\n    if closed(voltage, low, high) != claim:\n        wrong.append(pos)\nprint(*wrong) if wrong else print(\"PASS\")\n",
    "tests": [
      {
        "input": "5 9 4\n4 0\n5 0\n8 1\n9 1",
        "output": "2 4"
      },
      {
        "input": "-2 0 2\n-2 1\n0 0",
        "output": "PASS"
      },
      {
        "input": "0 1 1\n0 0",
        "output": "1"
      },
      {
        "input": "2 4 3\n2 1\n3 0\n1 1",
        "output": "2 3"
      }
    ],
    "hint": "Evaluate the predicate before comparing its result with the claim. Test both ends of the interval.",
    "hintZh": "先计算条件是否成立，再和预测结果比较。注意两个边界的处理不同。",
    "level": "Medium",
    "topic": "Boundary testing",
    "topicZh": "边界测试"
  },
  {
    "id": "L6-4",
    "unit": "L6",
    "title": "Paired force readings",
    "en": "A logger stores masses and accelerations in separate lines. Each line contains one or more integers. Pair corresponding entries, ignoring any unpaired tail. Force is mass multiplied by acceleration. Define force(mass, acceleration) and use map with both input lists to compute forces. Print the space-separated forces on line 1 and their sum on line 2.",
    "zh": "记录仪用两行分别保存质量和加速度，每行含至少一个整数。将相同位置的元素配对，忽略较长一行中多出的元素。定义 force(mass, acceleration)，并用 map 同时处理两行数据，计算力（质量乘以加速度）。第一行输出各个力，以空格分隔，第二行输出其总和。",
    "titleZh": "逐对计算力",
    "starter": "def force(mass, acceleration):\n    pass\n\n\nmasses = list(map(int, input().split()))\naccelerations = list(map(int, input().split()))\nforces = list(map(force, masses, accelerations))\nprint(*forces)\nprint(sum(forces))\n",
    "solution": "def force(mass, acceleration):\n    return mass * acceleration\n\n\nmasses = list(map(int, input().split()))\naccelerations = list(map(int, input().split()))\nforces = list(map(force, masses, accelerations))\nprint(*forces)\nprint(sum(forces))\n",
    "tests": [
      {
        "input": "2 3 4\n5 -2",
        "output": "10 -6\n4"
      },
      {
        "input": "0\n10 20",
        "output": "0\n0"
      },
      {
        "input": "3 4 5\n1 2 3",
        "output": "3 8 15\n26"
      },
      {
        "input": "7\n-3",
        "output": "-21\n-21"
      }
    ],
    "hint": "Force is mass × acceleration. Materialise the map results once so they can be printed and summed.",
    "hintZh": "力等于质量乘以加速度。将 map 的结果一次性转成列表，之后就可以既输出又求和。",
    "level": "Medium",
    "topic": "Higher-order functions",
    "topicZh": "高阶函数"
  },
  {
    "id": "L6-5",
    "unit": "L6",
    "title": "Calibrate then reject",
    "en": "A sensor's corrected value is raw × gain + offset. Read four integers gain offset low high (low ≤ high), then a nonempty line of raw integers. Write two functions: calibrate(raw, gain, offset) computes the correction; accepted(value, low, high) checks the inclusive limits. Print the number of accepted corrected values and their sum, separated by a space. An empty accepted group has sum 0.",
    "zh": "传感器校准值为 raw × gain + offset。第一行输入四个整数 gain offset low high（low ≤ high），第二行输入至少一个整数原始读数。编写两个函数，calibrate(raw, gain, offset) 计算校准值，accepted(value, low, high) 判断校准值是否位于闭区间内。输出通过筛选的校准值个数及其总和，以空格分隔。没有值通过时，总和为 0。",
    "titleZh": "校准后筛选",
    "starter": "def calibrate(raw, gain, offset):\n    pass\n\ndef accepted(value, low, high):\n    pass\n\n\ngain, offset, low, high = map(int, input().split())\ncount = total = 0\nfor raw in map(int, input().split()):\n    value = calibrate(raw, gain, offset)\n    if accepted(value, low, high):\n        count += 1\n        total += value\nprint(count, total)\n",
    "solution": "def calibrate(raw, gain, offset):\n    return raw * gain + offset\n\ndef accepted(value, low, high):\n    return low <= value <= high\n\n\ngain, offset, low, high = map(int, input().split())\ncount = total = 0\nfor raw in map(int, input().split()):\n    value = calibrate(raw, gain, offset)\n    if accepted(value, low, high):\n        count += 1\n        total += value\nprint(count, total)\n",
    "tests": [
      {
        "input": "2 -1 1 5\n0 1 2 3 4",
        "output": "3 9"
      },
      {
        "input": "-1 1 -2 0\n1 2 3",
        "output": "3 -3"
      },
      {
        "input": "0 4 4 4\n7 8",
        "output": "2 8"
      },
      {
        "input": "1 0 0 0\n2 9",
        "output": "0 0"
      }
    ],
    "hint": "Pass each calibrated value to the predicate and reuse that same value in the sum.",
    "hintZh": "将校准值交给判断函数，并用同一个校准值累加。",
    "level": "Hard",
    "topic": "Function composition",
    "topicZh": "函数组合"
  },
  {
    "id": "L6-6",
    "unit": "L6",
    "title": "The consumed iterator",
    "titleZh": "被消费的迭代器",
    "en": "Read K ≥ 0 and a second line of space-separated integers (possibly blank). Create one map iterator that squares the integers. Consume up to K values from it and print their sum. On the next line print the sum of the squares still in that same iterator.",
    "zh": "读入 K ≥ 0 和一行空格分隔的整数（该行可为空）。创建一个对各数平方的 map 迭代器。从中最多取出 K 项并输出它们的和；下一行输出同一迭代器中剩余平方值的和。",
    "hint": "next advances the iterator; sum continues from its current position.",
    "hintZh": "next 会推进迭代器，sum 从其当前位置继续。",
    "level": "Medium",
    "topic": "Lazy map",
    "topicZh": "惰性 map",
    "starter": "k = int(input())\nvalues = list(map(int, input().split()))\n# Write your solution here.\n",
    "solution": "k = int(input())\nvalues = list(map(int, input().split()))\nsquares = map(lambda x: x * x, values)\nfirst = sum(next(squares) for _ in range(min(k, len(values))))\nprint(first)\nprint(sum(squares))\n",
    "tests": [
      {
        "input": "2\n-2 3 4",
        "output": "13\n16"
      },
      {
        "input": "0\n3 -1",
        "output": "0\n10"
      },
      {
        "input": "9\n1 2",
        "output": "5\n0"
      },
      {
        "input": "2\n\n",
        "output": "0\n0"
      }
    ]
  },
  {
    "id": "L6-7",
    "unit": "L6",
    "title": "Return the first refusal",
    "titleZh": "返回首个不合格位置",
    "en": "Implement first_refusal(values, minimum). Return the zero-based position of the first value strictly below minimum, or None if every value passes. Read the minimum on one line and a possibly empty sequence of integers on the next. Print the returned index or PASS for None.",
    "zh": "实现 first_refusal(values, minimum)。返回第一个严格小于 minimum 的元素的零起始位置。全部合格则返回 None。第一行给出门槛，第二行给出可为空的整数序列。输出返回的索引，返回 None 时输出 PASS。",
    "hint": "An index of zero is a valid refusal. Test for None explicitly.",
    "hintZh": "索引零是有效结果，请明确判断是否为 None。",
    "level": "Medium",
    "topic": "Return paths",
    "topicZh": "返回分支",
    "starter": "def first_refusal(values, minimum):\n    pass\n\nminimum = int(input())\nvalues = list(map(int, input().split()))\nindex = first_refusal(values, minimum)\nprint(\"PASS\" if index is None else index)\n",
    "solution": "def first_refusal(values, minimum):\n    for i, value in enumerate(values):\n        if value < minimum:\n            return i\n    return None\n\nminimum = int(input())\nvalues = list(map(int, input().split()))\nindex = first_refusal(values, minimum)\nprint('PASS' if index is None else index)\n",
    "tests": [
      {
        "input": "5\n5 4 3",
        "output": "1"
      },
      {
        "input": "0\n-1 2",
        "output": "0"
      },
      {
        "input": "2\n2 7",
        "output": "PASS"
      },
      {
        "input": "3\n\n",
        "output": "PASS"
      }
    ]
  },
  {
    "id": "L6-8",
    "unit": "L6",
    "title": "Offset at definition time",
    "titleZh": "定义时的偏移量",
    "en": "Read initial offset A, updated offset B, and reading X on three lines, all integers. Set offset to A, then define adjust(x, bias=offset) to return x + bias. Set offset to B after the definition. Print adjust(X) and adjust(X, bias=offset) on one line in that order.",
    "zh": "三行读入整数：初始偏移 A、新偏移 B、读数 X。将 offset 设为 A，再定义 adjust(x, bias=offset)，返回 x + bias。定义完成后将 offset 设为 B。一行依次输出 adjust(X) 和 adjust(X, bias=offset) 的结果。",
    "hint": "The default expression is evaluated when def is executed.",
    "hintZh": "默认表达式在执行 def 时求值。",
    "level": "Medium",
    "topic": "Default evaluation",
    "topicZh": "默认值求值时机",
    "starter": "a = int(input())\nb = int(input())\nx = int(input())\n# Write your solution here.\n",
    "solution": "a = int(input())\nb = int(input())\nx = int(input())\noffset = a\ndef adjust(x, bias=offset):\n    return x + bias\noffset = b\nprint(adjust(x), adjust(x, bias=offset))\n",
    "tests": [
      {
        "input": "3\n7\n10",
        "output": "13 17"
      },
      {
        "input": "-2\n0\n1",
        "output": "-1 1"
      },
      {
        "input": "4\n4\n-4",
        "output": "0 0"
      },
      {
        "input": "0\n3\n0",
        "output": "0 3"
      }
    ]
  },
  {
    "id": "L6-9",
    "unit": "L6",
    "title": "Which check failed?",
    "titleZh": "哪条测试失败？",
    "en": "A specification says band(x) must return LOW for x < 0, MID for 0 ≤ x < 10, and HIGH otherwise. A candidate implementation returns LOW for x ≤ 0, MID for 0 < x ≤ 10, and HIGH otherwise. Read one line of space-separated integer test inputs (possibly blank). Print the 1-based positions of all tests that would expose the bug, or NONE.",
    "zh": "规格要求 band(x) 在 x < 0 时返回 LOW，0 ≤ x < 10 时返回 MID，其他情况返回 HIGH。候选实现在 x ≤ 0 时返回 LOW，0 < x ≤ 10 时返回 MID，其余返回 HIGH。读一行空格分隔的整数测试输入（可为空），输出所有能暴露错误的测试序号（从 1 开始，以空格分隔），没有则输出 NONE。",
    "hint": "Write a small oracle for the specification and compare its result with the candidate for every input.",
    "hintZh": "把规格写成一个小函数，对每个输入比较规格与候选实现的结果。",
    "level": "Medium",
    "topic": "Test partitioning",
    "topicZh": "测试用例分类",
    "starter": "values = list(map(int, input().split()))\n# Write your solution here.\n",
    "solution": "values = list(map(int, input().split()))\ndef band(x):\n    return 'LOW' if x < 0 else 'MID' if x < 10 else 'HIGH'\ndef candidate(x):\n    return 'LOW' if x <= 0 else 'MID' if x <= 10 else 'HIGH'\nfailed = [str(i) for i, x in enumerate(values, 1) if band(x) != candidate(x)]\nprint(' '.join(failed) or 'NONE')\n",
    "tests": [
      {
        "input": "-1 0 1 9 10 11",
        "output": "2 5"
      },
      {
        "input": "0 0 0",
        "output": "1 2 3"
      },
      {
        "input": "-9 1 20",
        "output": "NONE"
      },
      {
        "input": "\n",
        "output": "NONE"
      }
    ]
  },
  {
    "id": "L6-10",
    "unit": "L6",
    "title": "Test the two tariff functions",
    "titleZh": "比较两种计费函数",
    "en": "A meter charges 3 units per started block of 5 minutes. The supplied candidate mistakenly charges only for complete blocks. Implement fee(minutes, rate=3) correctly and first_failure(candidate, expected, cases), which calls both functions and returns the first failing input, or None. Read a possibly blank line of nonnegative integer test inputs. Print PASS if they all agree. Otherwise print the first failing input, the candidate result and the correct result on one line.",
    "zh": "计费器对每开始的 5 分钟收 3 个单位，不足 5 分钟也按一段收费。给出的候选函数错误地只按完整时间段收费。正确实现 fee(minutes, rate=3) 及 first_failure(candidate, expected, cases)，后者须调用两个函数，返回首个结果不一致的输入；全部一致则返回 None。读入一行可为空的非负整数测试输入。全部一致时输出 PASS，否则在一行输出首个失败输入、候选结果和正确结果。",
    "hint": "Write fee as the specification. Let the test function accept the two callables as arguments and return the failing value itself.",
    "hintZh": "先把规格写成 fee 函数；测试函数把待测函数和规格函数作为参数，返回发生差异的输入值本身。",
    "level": "Medium",
    "topic": "Recap · function parameters, defaults and testing",
    "topicZh": "综合 · 函数参数、默认值与测试",
    "starter": "def candidate(minutes, rate=3):\n    return (minutes // 5) * rate\n\ndef fee(minutes, rate=3):\n    pass\n\ndef first_failure(candidate, expected, cases):\n    pass\n\ncases = list(map(int, input().split()))\n# Run the checks and print the requested report.\n",
    "solution": "def candidate(minutes, rate=3):\n    return (minutes // 5) * rate\n\ndef fee(minutes, rate=3):\n    return ((minutes + 4) // 5) * rate\n\ndef first_failure(candidate, expected, cases):\n    for minutes in cases:\n        if candidate(minutes) != expected(minutes):\n            return minutes\n    return None\n\ncases = list(map(int, input().split()))\nfailure = first_failure(candidate, fee, cases)\nif failure is None:\n    print('PASS')\nelse:\n    print(failure, candidate(failure), fee(failure))\n",
    "tests": [
      {
        "input": "0 10 11 1",
        "output": "11 6 9"
      },
      {
        "input": "0 5 10",
        "output": "PASS"
      },
      {
        "input": "\n",
        "output": "PASS"
      },
      {
        "input": "1 4",
        "output": "1 0 3"
      }
    ],
    "recap": true
  },
  {
    "id": "L7-1",
    "unit": "L7",
    "title": "Keep the original queue",
    "en": "Write add_priority(queue, job) to return a new list with job first, followed by the original entries. Read a nonempty line of job IDs, then one new ID. Each ID is a nonempty string with no spaces; preserve it exactly, including any leading zeros. The caller prints the original queue on line 1 and the returned queue on line 2, using spaces between IDs.",
    "zh": "编写 add_priority(queue, job)，返回一个新列表，让 job 排在原有元素之前。第一行输入非空的任务编号序列，第二行输入一个新编号。每个编号都是不含空格的非空字符串。保留其原样，包括开头的零。调用者在第一行输出原队列，第二行输出返回的新队列，各编号用空格分隔。",
    "titleZh": "保留原队列",
    "starter": "def add_priority(queue, job):\n    pass\n\n\nqueue = input().split()\nupdated = add_priority(queue, input().strip())\nprint(*queue)\nprint(*updated)\n",
    "solution": "def add_priority(queue, job):\n    return [job] + queue\n\n\nqueue = input().split()\nupdated = add_priority(queue, input().strip())\nprint(*queue)\nprint(*updated)\n",
    "tests": [
      {
        "input": "B C\nA",
        "output": "B C\nA B C"
      },
      {
        "input": "X\nX",
        "output": "X\nX X"
      },
      {
        "input": "A A B\nA",
        "output": "A A B\nA A A B"
      },
      {
        "input": "050 1\n01",
        "output": "050 1\n01 050 1"
      }
    ],
    "hint": "Create a fresh outer list before adding jobs.",
    "hintZh": "先创建新列表，再向其中添加任务。",
    "level": "Easy",
    "topic": "Copying a list",
    "topicZh": "列表复制"
  },
  {
    "id": "L7-2",
    "unit": "L7",
    "title": "Clean a shared buffer",
    "en": "A monitor holds an alias to a list of readings. Implement clean(buffer, floor) so it removes all items strictly below floor in place, preserving order. Read floor, then a nonempty line of integers. After the call, the monitor prints its view of the buffer, space-separated, or EMPTY if all entries were removed.",
    "zh": "监视器保存着同一读数列表的另一个引用。编写 clean(buffer, floor)，原地删除所有严格小于 floor 的值，保持其余元素的顺序。第一行输入整数 floor，第二行输入至少一个整数。调用后，监视器输出它看到的列表，用空格分隔；若列表为空则输出 EMPTY。",
    "titleZh": "清理共享缓冲区",
    "starter": "def clean(buffer, floor):\n    pass\n\n\nfloor = int(input())\nbuffer = list(map(int, input().split()))\nmonitor = buffer\nclean(buffer, floor)\nprint(*monitor) if monitor else print(\"EMPTY\")\n",
    "solution": "def clean(buffer, floor):\n    buffer[:] = [value for value in buffer if value >= floor]\n\n\nfloor = int(input())\nbuffer = list(map(int, input().split()))\nmonitor = buffer\nclean(buffer, floor)\nprint(*monitor) if monitor else print(\"EMPTY\")\n",
    "tests": [
      {
        "input": "4\n1 1 4 3 8 4",
        "output": "4 8 4"
      },
      {
        "input": "0\n-2 -1",
        "output": "EMPTY"
      },
      {
        "input": "2\n2",
        "output": "2"
      },
      {
        "input": "-3\n-3 -5 -1 -8",
        "output": "-3 -1"
      }
    ],
    "hint": "Build the kept values first, then assign them to buffer[:].",
    "hintZh": "先收集要保留的数，再用 buffer[:] 的切片赋值替换内容。",
    "level": "Medium",
    "topic": "In-place filtering",
    "topicZh": "原地过滤"
  },
  {
    "id": "L7-3",
    "unit": "L7",
    "title": "Patch a grid snapshot",
    "en": "Read r c (both positive), then r rows of c integers. The last line gives zero-based row i, column j, and a replacement integer. Implement patched(grid, i, j, value) to return a copy with one cell replaced. Print the old row i on line 1 and the new row i on line 2, using spaces. Both indices are valid.",
    "zh": "第一行输入正整数 r c，随后输入 r 行，每行含 c 个整数。最后一行给出从 0 开始的行号 i、列号 j 和替换值。编写 patched(grid, i, j, value)，返回替换这一格后的网格副本。第一行输出原网格的第 i 行，第二行输出新网格的第 i 行，元素用空格分隔。下标均有效。",
    "titleZh": "修改网格快照",
    "starter": "def patched(grid, i, j, value):\n    pass\n\n\nr, c = map(int, input().split())\ngrid = [list(map(int, input().split())) for _ in range(r)]\ni, j, value = map(int, input().split())\nupdated = patched(grid, i, j, value)\nprint(*grid[i])\nprint(*updated[i])\n",
    "solution": "def patched(grid, i, j, value):\n    result = [row.copy() for row in grid]\n    result[i][j] = value\n    return result\n\n\nr, c = map(int, input().split())\ngrid = [list(map(int, input().split())) for _ in range(r)]\ni, j, value = map(int, input().split())\nupdated = patched(grid, i, j, value)\nprint(*grid[i])\nprint(*updated[i])\n",
    "tests": [
      {
        "input": "2 3\n1 2 3\n4 5 6\n1 0 9",
        "output": "4 5 6\n9 5 6"
      },
      {
        "input": "1 1\n8\n0 0 -1",
        "output": "8\n-1"
      },
      {
        "input": "2 2\n0 0\n0 0\n0 1 4",
        "output": "0 0\n0 4"
      },
      {
        "input": "1 2\n5 6\n0 1 6",
        "output": "5 6\n5 6"
      }
    ],
    "hint": "Copy each row as well as the outer list, then edit the new grid.",
    "hintZh": "除了复制外层列表，还要逐行复制，再修改新网格。",
    "level": "Medium",
    "topic": "Nested copying",
    "topicZh": "嵌套对象复制"
  },
  {
    "id": "L7-4",
    "unit": "L7",
    "title": "Independent logbooks",
    "en": "Write record(label, log=None). With no log supplied, return a fresh one-item list. With a supplied list (even an empty one), append label to that same object and return it. Read four space-separated labels on one line. Record the first and fourth in a shared, initially empty list. Record the second and third in separate fresh lists using calls with no log argument. Print the shared list, then the second label's list, then the third label's list on three lines, using spaces between entries.",
    "zh": "编写 record(label, log=None)。省略 log 时，返回仅含 label 的新列表。传入列表时（即使它为空），在这个对象上追加 label 并返回它。输入一行四个单词标签。第一、第四个标签存入同一个初始为空的列表。写入第二、第三个标签时各调用一次函数并省略 log 参数，各自获得独立列表。分三行依次输出共享列表、第二个标签所在列表、第三个标签所在列表，各元素用空格分隔。",
    "titleZh": "独立日志簿",
    "starter": "def record(label, log=None):\n    pass\n\n\na, b, c, d = input().split()\nshared = []\nrecord(a, shared)\nfirst = record(b)\nsecond = record(c)\nrecord(d, shared)\nprint(*shared)\nprint(*first)\nprint(*second)\n",
    "solution": "def record(label, log=None):\n    if log is None:\n        log = []\n    log.append(label)\n    return log\n\n\na, b, c, d = input().split()\nshared = []\nrecord(a, shared)\nfirst = record(b)\nsecond = record(c)\nrecord(d, shared)\nprint(*shared)\nprint(*first)\nprint(*second)\n",
    "tests": [
      {
        "input": "hot cold warm ok",
        "output": "hot ok\ncold\nwarm"
      },
      {
        "input": "X X X X",
        "output": "X X\nX\nX"
      },
      {
        "input": "A a B b",
        "output": "A b\na\nB"
      },
      {
        "input": "0 1 2 3",
        "output": "0 3\n1\n2"
      }
    ],
    "hint": "Check log is None to decide whether the caller supplied a list.",
    "hintZh": "用 log is None 判断调用者是否传入了列表。",
    "level": "Medium",
    "topic": "Mutable defaults",
    "topicZh": "可变默认参数"
  },
  {
    "id": "L7-5",
    "unit": "L7",
    "title": "Two views of a buffer",
    "en": "Names a and b initially refer to the same nonempty list of integers. Read the space-separated list on line 1, an integer n ≥ 0 on line 2, then n command lines that act on b: PUSH x appends x in place; JOIN x rebinds b to b + [x]; RESET rebinds b to a. Implement the commands. Print a and b on separate lines with one space between values, then SAME if they are the same object or DISTINCT otherwise.",
    "zh": "a 与 b 最初引用同一非空整数列表。第一行输入列表，第二行输入非负命令数 n，随后 n 行给出作用于 b 的命令。PUSH x 原地追加 x；JOIN x 将 b 重新绑定为 b + [x]；RESET 将 b 重新绑定到 a。执行命令后，分两行输出 a 和 b 的内容，各值用空格分隔；第三行输出 SAME（同一对象）或 DISTINCT（不同对象）。",
    "titleZh": "缓冲区的两个视图",
    "starter": "def apply_commands(a, commands):\n    pass\n\n\na = list(map(int, input().split()))\ncommands = [input().split() for _ in range(int(input()))]\nb = apply_commands(a, commands)\nprint(*a)\nprint(*b)\nprint(\"SAME\" if a is b else \"DISTINCT\")\n",
    "solution": "def apply_commands(a, commands):\n    b = a\n    for fields in commands:\n        if fields[0] == \"PUSH\":\n            b.append(int(fields[1]))\n        elif fields[0] == \"JOIN\":\n            b = b + [int(fields[1])]\n        else:\n            b = a\n    return b\n\n\na = list(map(int, input().split()))\ncommands = [input().split() for _ in range(int(input()))]\nb = apply_commands(a, commands)\nprint(*a)\nprint(*b)\nprint(\"SAME\" if a is b else \"DISTINCT\")\n",
    "tests": [
      {
        "input": "3 5\n3\nPUSH 7\nJOIN 9\nPUSH 11",
        "output": "3 5 7\n3 5 7 9 11\nDISTINCT"
      },
      {
        "input": "0\n0",
        "output": "0\n0\nSAME"
      },
      {
        "input": "1 2\n3\nJOIN 3\nRESET\nPUSH 4",
        "output": "1 2 4\n1 2 4\nSAME"
      },
      {
        "input": "8\n3\nJOIN 6\nJOIN 7\nRESET",
        "output": "8\n8\nSAME"
      }
    ],
    "hint": "Track which name is rebound. Use is for the final identity check.",
    "hintZh": "跟踪哪一个名称被重新绑定。最后用 is 判断对象身份。",
    "level": "Hard",
    "topic": "Aliasing and rebinding",
    "topicZh": "别名与重新绑定"
  },
  {
    "id": "L7-6",
    "unit": "L7",
    "title": "Rows that move together",
    "titleZh": "同步变化的行",
    "en": "Read row and column counts R C (both positive), then a line i j v (valid zero-based indices and integer value). Make two zero grids: repeated = [[0]*C]*R and fresh with an independent row for each position. Assign v to cell [i][j] of both. For each grid in that order, print the sum of all entries.",
    "zh": "先读一行正整数 R C，再读一行 i j v（有效的零起始坐标和整数值）。创建两个零矩阵：repeated = [[0]*C]*R，另一个 fresh 的每行独立创建。两个矩阵都把 [i][j] 改为 v。分别输出 repeated 和 fresh 中全部元素的和，每个矩阵一行。",
    "hint": "Draw the row objects created before and after multiplying the outer list.",
    "hintZh": "画出外层列表做乘法前后实际创建了哪些行对象。",
    "level": "Medium",
    "topic": "Repeated references",
    "topicZh": "重复引用",
    "starter": "r, c = map(int, input().split())\ni, j, value = map(int, input().split())\n# Write your solution here.\n",
    "solution": "r, c = map(int, input().split())\ni, j, value = map(int, input().split())\nrepeated = [[0] * c] * r\nfresh = [[0] * c for _ in range(r)]\nfor grid in (repeated, fresh):\n    grid[i][j] = value\n    print(sum(sum(row) for row in grid))\n",
    "tests": [
      {
        "input": "3 2\n1 0 5",
        "output": "15\n5"
      },
      {
        "input": "1 1\n0 0 -3",
        "output": "-3\n-3"
      },
      {
        "input": "2 4\n0 3 0",
        "output": "0\n0"
      },
      {
        "input": "4 1\n3 0 -2",
        "output": "-8\n-2"
      }
    ]
  },
  {
    "id": "L7-7",
    "unit": "L7",
    "title": "A tuple holding a tray",
    "titleZh": "元组里的托盘",
    "en": "Read a name, a line of space-separated integer readings (possibly blank), and integer X. Form a tuple (name, readings). Construct a second tuple (name, readings[:]). Append X to the list inside the first tuple. For each tuple in order, print its name, number of readings and sum of readings on one line, separated by spaces. Names are single words.",
    "zh": "读入单词名称、空格分隔的整数读数（可为空行）以及整数 X，共三行。创建 (name, readings)，再创建 (name, readings[:])。向第一个元组内的列表追加 X。按两元组的顺序，各用一行输出名称、读数个数和总和，以空格分隔。",
    "hint": "A tuple fixes its item references. One of those references can point to a mutable list.",
    "hintZh": "元组固定各项的引用，其中一个引用可以指向可变列表。",
    "level": "Medium",
    "topic": "Mutable tuple contents",
    "topicZh": "元组的可变内容",
    "starter": "name = input()\nreadings = list(map(int, input().split()))\nx = int(input())\n# Write your solution here.\n",
    "solution": "name = input()\nreadings = list(map(int, input().split()))\nx = int(input())\nlive = (name, readings)\nsaved = (name, readings[:])\nlive[1].append(x)\nfor label, row in (live, saved):\n    print(label, len(row), sum(row))\n",
    "tests": [
      {
        "input": "D\n2 3\n7",
        "output": "D 3 12\nD 2 5"
      },
      {
        "input": "Q\n\n0",
        "output": "Q 1 0\nQ 0 0"
      },
      {
        "input": "X\n-1\n-2",
        "output": "X 2 -3\nX 1 -1"
      },
      {
        "input": "T\n0 0\n5",
        "output": "T 3 5\nT 2 0"
      }
    ]
  },
  {
    "id": "L7-8",
    "unit": "L7",
    "title": "The returned append",
    "titleZh": "append 的返回值",
    "en": "Read a line of space-separated words (possibly blank), then one new word. Let alias refer to the original list. Save the result of alias.append(word) in a variable. Print that result on line 1 and the contents of the original list joined with spaces on line 2.",
    "zh": "读入一行空格分隔的单词（该行可为空），再读入一个新单词。让 alias 引用原列表，将 alias.append(word) 的返回值存入一个变量。第一行输出该返回值；第二行用空格连接并输出原列表中的单词。",
    "hint": "Check both what append does to an object and what it returns to its caller.",
    "hintZh": "分别观察 append 对对象产生的影响和它交给调用方的返回值。",
    "level": "Easy",
    "topic": "Mutation and return",
    "topicZh": "修改与返回值",
    "starter": "words = input().split()\nword = input()\n# Write your solution here.\n",
    "solution": "words = input().split()\nword = input()\nalias = words\nresult = alias.append(word)\nprint(result)\nprint(*words)\n",
    "tests": [
      {
        "input": "red blue\ngreen",
        "output": "None\nred blue green"
      },
      {
        "input": "\nA",
        "output": "None\nA"
      },
      {
        "input": "x\nx",
        "output": "None\nx x"
      },
      {
        "input": "one TWO\nthree",
        "output": "None\none TWO three"
      }
    ]
  },
  {
    "id": "L7-9",
    "unit": "L7",
    "title": "Patch the counters",
    "titleZh": "修改共享字典",
    "en": "Read starting integers A B on one line and an integer delta on the next. Store the two values in a dictionary under keys A and B. Implement shift(counts, delta): subtract delta from A and add it to B in the supplied dictionary, then return whichever key has the larger final value (TIE for equality). Print the return value on line 1 and the caller’s updated A B on line 2.",
    "zh": "第一行给出初值 A B，第二行给出整数 delta。将初值存入字典的 A、B 键。实现 shift(counts, delta)，在传入的字典中把 A 减去 delta、B 加上 delta，再返回最终值较大的键名，相等时返回 TIE。第一行输出返回值，第二行输出调用方字典更新后的 A B。",
    "hint": "Writing counts[\"A\"] changes the shared dictionary. Assigning a new dictionary to counts only changes the local name.",
    "hintZh": "写入 counts[\"A\"] 会改变共享字典，给 counts 赋一个新字典只会改变局部名称。",
    "level": "Medium",
    "topic": "Dictionary parameter effects",
    "topicZh": "字典参数的影响",
    "starter": "def shift(counts, delta):\n    pass\n\na, b = map(int, input().split())\ncounts = {'A': a, 'B': b}\nprint(shift(counts, int(input())))\nprint(counts['A'], counts['B'])\n",
    "solution": "def shift(counts, delta):\n    counts['A'] -= delta\n    counts['B'] += delta\n    if counts['A'] == counts['B']:\n        return 'TIE'\n    return max(counts, key=counts.get)\n\na, b = map(int, input().split())\ncounts = {'A': a, 'B': b}\nprint(shift(counts, int(input())))\nprint(counts['A'], counts['B'])\n",
    "tests": [
      {
        "input": "8 2\n3",
        "output": "TIE\n5 5"
      },
      {
        "input": "1 1\n-2",
        "output": "A\n3 -1"
      },
      {
        "input": "3 6\n0",
        "output": "B\n3 6"
      },
      {
        "input": "0 0\n0",
        "output": "TIE\n0 0"
      }
    ]
  },
  {
    "id": "L7-10",
    "unit": "L7",
    "title": "Freeze the instrument record",
    "titleZh": "冻结仪器记录",
    "en": "A dictionary record contains a one-word label and a list of readings. Read the label, a line of integer readings (possibly blank), then new_label and integer x on one line. Create shallow = record.copy() and also a snapshot with its own copy of the readings. Change the label in record to new_label and append x to its readings. Print record, shallow and snapshot in that order, each as label followed by its reading count and sum, separated by spaces. Decide which values were rebound and which object was mutated.",
    "zh": "字典记录包含一个单词标签和一组读数。前三行依次给出标签、一行整数读数（可为空）、用空格分隔的新标签与整数 x。创建 shallow = record.copy()，另建一个拥有独立读数列表的快照。把 record 的标签改为新标签，并在读数列表末尾追加 x。分别为 record、shallow、快照输出一行：标签、读数数量及总和，以空格分隔。需要区分哪些值被重新绑定、哪个对象被原地修改。",
    "hint": "A new dictionary has independent keys, but a copied value may still refer to the same list.",
    "hintZh": "新字典中的键可独立赋值，但复制过来的值仍可能指向同一个列表。",
    "level": "Medium",
    "topic": "Recap · shallow copying and nested mutation",
    "topicZh": "综合 · 浅拷贝与嵌套修改",
    "starter": "label = input()\nreadings = list(map(int, input().split()))\nnew_label, raw_x = input().split()\n# Write your solution here.\n",
    "solution": "label = input()\nreadings = list(map(int, input().split()))\nnew_label, raw_x = input().split()\nrecord = {'label': label, 'readings': readings}\nshallow = record.copy()\nsnapshot = {'label': label, 'readings': readings.copy()}\nrecord['label'] = new_label\nrecord['readings'].append(int(raw_x))\nfor item in (record, shallow, snapshot):\n    print(item['label'], len(item['readings']), sum(item['readings']))\n",
    "tests": [
      {
        "input": "A\n2 4\nB 3",
        "output": "B 3 9\nA 3 9\nA 2 6"
      },
      {
        "input": "X\n\nX -1",
        "output": "X 1 -1\nX 1 -1\nX 0 0"
      },
      {
        "input": "r\n0\ns 0",
        "output": "s 2 0\nr 2 0\nr 1 0"
      },
      {
        "input": "k\n-4 2\nK -1",
        "output": "K 3 -3\nk 3 -3\nk 2 -2"
      }
    ],
    "recap": true
  },
  {
    "id": "L8-1",
    "unit": "L8",
    "title": "Inspect until the first fault",
    "en": "Read integers low and high (low ≤ high) on the first line, then a line of space-separated integer readings (possibly blank). Scan from left to right until a reading lies outside [low, high]. Print its zero-based index, or -1 if no such reading exists. On the same line print the number of readings inspected, including the first fault if found.",
    "zh": "第一行输入整数 low 和 high（low ≤ high），第二行输入以空格分隔的整数读数，允许为空行。从左向右查找第一个不在闭区间 [low, high] 内的读数。输出其从 0 开始的下标，若没有则输出 -1。同一行再输出实际检查的读数个数，发现异常时要计入该读数。两个数以空格分隔。",
    "titleZh": "找到首个异常读数",
    "starter": "def inspect(readings, low, high):\n    pass\n\n\nlow, high = map(int, input().split())\nreadings = list(map(int, input().split()))\nprint(*inspect(readings, low, high))\n",
    "solution": "def inspect(readings, low, high):\n    for i, value in enumerate(readings):\n        if value < low or value > high:\n            return i, i + 1\n    return -1, len(readings)\n\n\nlow, high = map(int, input().split())\nreadings = list(map(int, input().split()))\nprint(*inspect(readings, low, high))\n",
    "tests": [
      {
        "input": "2 7\n4 7 8 5",
        "output": "2 3"
      },
      {
        "input": "0 0\n0 0",
        "output": "-1 2"
      },
      {
        "input": "1 5\n0 2",
        "output": "0 1"
      },
      {
        "input": "0 9\n\n",
        "output": "-1 0"
      }
    ],
    "hint": "A successful search at position i has inspected i + 1 readings.",
    "hintZh": "若在位置 i 找到异常，已检查的读数共有 i + 1 个。",
    "level": "Easy",
    "topic": "Linear search",
    "topicZh": "线性查找"
  },
  {
    "id": "L8-2",
    "unit": "L8",
    "title": "The midpoint log",
    "en": "Read a line of sorted integers in nondecreasing order (possibly blank), then an integer target. Run binary search with inclusive bounds, starting at indices 0 and len(values) − 1. At each step use mid = (low + high) // 2 and stop on equality. Print the zero-based midpoint indices inspected, in order, separated by spaces. Print NONE for an empty input list.",
    "zh": "第一行输入非递减排列的整数序列（允许为空行），第二行输入整数目标值。使用闭区间二分查找，初始边界为 0 和 len(values) − 1，每步取 mid = (low + high) // 2，遇到相等立即停止。输出按访问顺序排列的中点下标（从 0 开始），用空格分隔。空列表输出 NONE。",
    "titleZh": "二分查找探测记录",
    "starter": "def probes(values, target):\n    pass\n\n\nvalues = list(map(int, input().split()))\nseen = probes(values, int(input()))\nprint(*seen) if seen else print(\"NONE\")\n",
    "solution": "def probes(values, target):\n    low, high = 0, len(values) - 1\n    seen = []\n    while low <= high:\n        mid = (low + high) // 2\n        seen.append(mid)\n        if values[mid] == target:\n            break\n        if values[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return seen\n\n\nvalues = list(map(int, input().split()))\nseen = probes(values, int(input()))\nprint(*seen) if seen else print(\"NONE\")\n",
    "tests": [
      {
        "input": "2 4 6 8 10 12\n10",
        "output": "2 4"
      },
      {
        "input": "5 5 5 5\n5",
        "output": "1"
      },
      {
        "input": "1 2 3 4 5\n0",
        "output": "2 0"
      },
      {
        "input": "\n9",
        "output": "NONE"
      },
      {
        "input": "1 3 5\n4",
        "output": "1 2"
      }
    ],
    "hint": "For an unequal midpoint, the next interval excludes that midpoint.",
    "hintZh": "若中点值不等于目标，下一步区间应排除该中点。",
    "level": "Medium",
    "topic": "Binary search",
    "topicZh": "二分查找"
  },
  {
    "id": "L8-3",
    "unit": "L8",
    "title": "One conveyor pass",
    "en": "Read one nonempty line of integers. Make exactly one left-to-right bubble-sort pass: compare adjacent positions and swap only if the left value is greater. Print the resulting sequence on the first line and the number of swaps on the second.",
    "zh": "输入一行非空整数序列。只做一趟从左到右的冒泡排序，每次比较相邻两项，仅当左项严格大于右项时交换。第一行输出该趟结束后的序列（用空格分隔），第二行输出交换次数。",
    "titleZh": "传送带上的一趟冒泡",
    "starter": "def one_pass(values):\n    pass\n\n\nvalues = list(map(int, input().split()))\ncount = one_pass(values)\nprint(*values)\nprint(count)\n",
    "solution": "def one_pass(values):\n    swaps = 0\n    for i in range(len(values) - 1):\n        if values[i] > values[i + 1]:\n            values[i], values[i + 1] = values[i + 1], values[i]\n            swaps += 1\n    return swaps\n\n\nvalues = list(map(int, input().split()))\ncount = one_pass(values)\nprint(*values)\nprint(count)\n",
    "tests": [
      {
        "input": "7 2 6 1",
        "output": "2 6 1 7\n3"
      },
      {
        "input": "4",
        "output": "4\n0"
      },
      {
        "input": "2 2 3",
        "output": "2 2 3\n0"
      },
      {
        "input": "0 -1 -2",
        "output": "-1 -2 0\n2"
      }
    ],
    "hint": "After a swap, move one position right and compare the current contents there.",
    "hintZh": "完成交换后向右移一个位置，比较此时相邻位置上的值。",
    "level": "Easy",
    "topic": "Bubble sort",
    "topicZh": "冒泡排序"
  },
  {
    "id": "L8-4",
    "unit": "L8",
    "title": "Insertion work log",
    "en": "Read one line of at least two integers. Run ascending insertion sort. For every key from index 1 onward, count the earlier values shifted one position right to make room for it. Equal values stay in their original order. Print the shift counts in pass order, separated by spaces. Placing the key itself does not add a shift.",
    "zh": "输入一行至少两个整数，执行升序插入排序。从下标 1 的待插元素开始，逐趟统计为了给它腾出位置而向右移动一格的已有元素个数。相等元素保持原顺序。输出每一趟的移位数，以空格分隔。写入待插元素本身不计作移位。",
    "titleZh": "插入排序移位记录",
    "starter": "def shift_counts(values):\n    pass\n\n\nvalues = list(map(int, input().split()))\nprint(*shift_counts(values))\n",
    "solution": "def shift_counts(values):\n    counts = []\n    for i in range(1, len(values)):\n        key = values[i]\n        j = i\n        while j > 0 and values[j - 1] > key:\n            values[j] = values[j - 1]\n            j -= 1\n        values[j] = key\n        counts.append(i - j)\n    return counts\n\n\nvalues = list(map(int, input().split()))\nprint(*shift_counts(values))\n",
    "tests": [
      {
        "input": "5 2 2 6 1",
        "output": "1 1 0 4"
      },
      {
        "input": "5 4 3 2",
        "output": "1 2 3"
      },
      {
        "input": "0 0",
        "output": "0"
      },
      {
        "input": "-2 -4 0 -3",
        "output": "1 0 2"
      }
    ],
    "hint": "Save the key, then shift while the preceding value is strictly greater.",
    "hintZh": "先保存待插元素，只在前面的值严格大于它时向右移动。",
    "level": "Medium",
    "topic": "Insertion sort",
    "topicZh": "插入排序"
  },
  {
    "id": "L8-5",
    "unit": "L8",
    "title": "Pick the next inspection",
    "en": "Read n k (1 ≤ n ≤ 100, 0 ≤ k ≤ n), then n lines of unique one-word ID and integer urgency. Carry out k selection-sort passes. On pass i, find the best record in positions i through n − 1 (higher urgency first, then alphabetically smaller ID, using Python string order). Swap that record with position i. Print all IDs in their current order, separated by spaces. IDs may contain uppercase or lowercase ASCII letters.",
    "zh": "输入 n k（1 ≤ n ≤ 100，0 ≤ k ≤ n），随后 n 行各含一个唯一编号和整数紧急度，编号仅由大小写英文字母组成。执行 k 趟选择排序。第 i 趟（i 从 0 开始）在下标 i 至 n − 1 中选最优记录，优先选紧急度高的，同分时按 Python 字符串顺序选编号最小的，并将它与下标 i 的记录交换。输出此时所有编号的排列，编号用空格分隔。",
    "titleZh": "挑选下一项检验任务",
    "starter": "def reorder(records, passes):\n    pass\n\n\nn, k = map(int, input().split())\nrecords = []\nfor _ in range(n):\n    label, urgency = input().split()\n    records.append((-int(urgency), label))\nreorder(records, k)\nprint(*(label for _, label in records))\n",
    "solution": "def reorder(records, passes):\n    for i in range(passes):\n        best = i\n        for j in range(i + 1, len(records)):\n            if records[j] < records[best]:\n                best = j\n        records[i], records[best] = records[best], records[i]\n\n\nn, k = map(int, input().split())\nrecords = []\nfor _ in range(n):\n    label, urgency = input().split()\n    records.append((-int(urgency), label))\nreorder(records, k)\nprint(*(label for _, label in records))\n",
    "tests": [
      {
        "input": "4 1\nZ 1\nC 4\nA 4\nB 2",
        "output": "A C Z B"
      },
      {
        "input": "3 0\nB 0\nC 9\nA 2",
        "output": "B C A"
      },
      {
        "input": "3 3\nz 0\nZ 0\na 0",
        "output": "Z a z"
      },
      {
        "input": "4 2\nX 1\nB -1\nS 2\nY 4",
        "output": "Y S B X"
      }
    ],
    "hint": "Use (-urgency, ID) as the ordering key. A partial run leaves a specific arrangement in the remaining suffix.",
    "hintZh": "可用 (-urgency, ID) 作为排序键。只做一部分趟数时，后面未排好的一段仍要按交换后的实际顺序输出。",
    "level": "Hard",
    "topic": "Selection sort and keys",
    "topicZh": "选择排序与排序键"
  },
  {
    "id": "L8-6",
    "unit": "L8",
    "title": "First available slot",
    "titleZh": "首个可用时段",
    "en": "Read a sorted nondecreasing line of integer departure times (possibly blank), then an integer arrival time. Use binary search to find the smallest zero-based index whose departure is at least the arrival time. Print that index, or FULL if no such departure exists.",
    "zh": "第一行读入按非降序排列的整数发车时刻（可为空），第二行读入整数到达时刻。用二分查找找出发车时刻不早于到达时刻的最小零起始索引。没有合适车次时输出 FULL。",
    "hint": "When mid qualifies, retain it as a candidate and continue toward smaller indices.",
    "hintZh": "当中点符合条件时，把它保留为候选，继续向较小索引搜索。",
    "level": "Medium",
    "topic": "Lower-bound search",
    "topicZh": "二分查找下界",
    "starter": "times = list(map(int, input().split()))\narrival = int(input())\n# Write your solution here.\n",
    "solution": "times = list(map(int, input().split()))\narrival = int(input())\nlo, hi = 0, len(times)\nwhile lo < hi:\n    mid = (lo + hi) // 2\n    if times[mid] < arrival:\n        lo = mid + 1\n    else:\n        hi = mid\nprint(lo if lo < len(times) else 'FULL')\n",
    "tests": [
      {
        "input": "2 4 4 8\n4",
        "output": "1"
      },
      {
        "input": "1 3\n4",
        "output": "FULL"
      },
      {
        "input": "\n0",
        "output": "FULL"
      },
      {
        "input": "5 6\n-3",
        "output": "0"
      },
      {
        "input": "1 4 8\n5",
        "output": "2"
      }
    ]
  },
  {
    "id": "L8-7",
    "unit": "L8",
    "title": "Passes until quiet",
    "titleZh": "直到无交换的一趟",
    "en": "Read one possibly blank line of integers. Perform ascending bubble sort. On pass 1 compare adjacent entries from the start through the final pair. On each later pass omit one more position from the right. Stop after a pass makes zero swaps or after N−1 passes, whichever comes first. Print the number of completed passes and total swaps. Lists shorter than two need zero passes.",
    "zh": "读入一行整数（可为空行）。进行升序冒泡排序，第一趟从左到右比较所有相邻元素，以后每趟从右端多排除一个位置。一趟没有交换即停止，最多执行 N−1 趟。输出执行的趟数和总交换数。少于两个元素时两者均为零。",
    "hint": "Count the final no-swap pass when it actually takes place. Equal neighbors stay in place.",
    "hintZh": "若实际执行了无交换的一趟，这一趟也要计数。相等的相邻项不交换。",
    "level": "Medium",
    "topic": "Bubble-sort early exit",
    "topicZh": "冒泡排序提前退出",
    "starter": "values = list(map(int, input().split()))\n# Write your solution here.\n",
    "solution": "values = list(map(int, input().split()))\npasses = swaps = 0\nfor end in range(len(values) - 1, 0, -1):\n    passes += 1\n    changed = False\n    for i in range(end):\n        if values[i] > values[i + 1]:\n            values[i], values[i + 1] = values[i + 1], values[i]\n            swaps += 1\n            changed = True\n    if not changed:\n        break\nprint(passes, swaps)\n",
    "tests": [
      {
        "input": "2 1 3 4",
        "output": "2 1"
      },
      {
        "input": "4 3 2 1",
        "output": "3 6"
      },
      {
        "input": "4 4 4",
        "output": "1 0"
      },
      {
        "input": "\n",
        "output": "0 0"
      },
      {
        "input": "7",
        "output": "0 0"
      }
    ]
  },
  {
    "id": "L8-8",
    "unit": "L8",
    "title": "Rank the tied finishers",
    "titleZh": "并列名次",
    "en": "Read a nonempty line of integer scores. Print one rank per score in the original input order on a single space-separated line. A score’s rank is one plus the number of scores strictly greater than it. Equal scores share the same rank, and occupy multiple positions when ranking lower scores.",
    "zh": "读入一行非空的整数分数。按原输入顺序在一行输出每个分数的名次，以空格分隔。名次等于严格高于该分数的人数加一。同分并列，计算后续较低分的名次时所有同分选手都占位置。",
    "hint": "In a descending list, the first position of each score gives its rank.",
    "hintZh": "将分数降序排列，某分数第一次出现的位置决定它的名次。",
    "level": "Medium",
    "topic": "Sorting and equal keys",
    "topicZh": "排序与相等键",
    "starter": "scores = list(map(int, input().split()))\n# Write your solution here.\n",
    "solution": "scores = list(map(int, input().split()))\nranks = {}\nfor position, score in enumerate(sorted(scores, reverse=True), 1):\n    if score not in ranks:\n        ranks[score] = position\nprint(*(ranks[score] for score in scores))\n",
    "tests": [
      {
        "input": "6 9 6 1",
        "output": "2 1 2 4"
      },
      {
        "input": "3 3 3",
        "output": "1 1 1"
      },
      {
        "input": "-5 -2 0",
        "output": "3 2 1"
      },
      {
        "input": "12",
        "output": "1"
      }
    ]
  },
  {
    "id": "L8-9",
    "unit": "L8",
    "title": "Two search budgets",
    "titleZh": "两种查找预算",
    "en": "Read N ≥ 1. For every integer target from 1 to N, search [1, 2, ..., N] separately. Linear search probes entries from the left. Binary search uses inclusive bounds and the lower midpoint until the target is found. Count one probe every time an entry is inspected. Print the total linear probes and total binary probes across all targets. N ≤ 2000.",
    "zh": "读入 1 ≤ N ≤ 2000。对 1 到 N 中的每个目标，分别在 [1, 2, ..., N] 内查找。线性查找从左向右；二分查找使用闭区间和向下取整的中点，找到目标即停。每查看一个元素算一次检查。依次输出搜索所有目标的线性检查总数和二分检查总数。",
    "hint": "For linear search the probe count for target t equals t. Restart the binary bounds for each target.",
    "hintZh": "线性查找目标 t 恰好检查 t 次。每次搜索新目标都要重置二分区间。",
    "level": "Hard",
    "topic": "Comparing search work",
    "topicZh": "比较查找成本",
    "starter": "n = int(input())\n# Write your solution here.\n",
    "solution": "n = int(input())\nbinary = 0\nfor target in range(1, n + 1):\n    lo, hi = 1, n\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        binary += 1\n        if target == mid:\n            break\n        if target < mid:\n            hi = mid - 1\n        else:\n            lo = mid + 1\nprint(n * (n + 1) // 2, binary)\n",
    "tests": [
      {
        "input": "4",
        "output": "10 8"
      },
      {
        "input": "1",
        "output": "1 1"
      },
      {
        "input": "3",
        "output": "6 5"
      },
      {
        "input": "7",
        "output": "28 17"
      },
      {
        "input": "2",
        "output": "3 3"
      }
    ]
  },
  {
    "id": "L8-10",
    "unit": "L8",
    "title": "Find a qualifying motor",
    "titleZh": "查找达标电机",
    "en": "Read N ≥ 0, then N motors in catalogue order, each given as a distinct one-word model and integer rating. Read a final line containing a minimum acceptable rating. Stably sort by increasing rating, then binary-search for the first motor whose rating meets or exceeds that minimum. Print its model, rating and zero-based index in the sorted catalogue. If none qualifies, print NONE. Equal ratings retain catalogue order.",
    "zh": "先读 N ≥ 0，再按目录原顺序读取 N 台电机，每行含一个不重复的单词型号和整数额定值。最后一行给出最低合格额定值。按额定值升序稳定排序，再用二分查找找出第一台达标电机。输出其型号、额定值及排序目录中的零起始索引；没有达标电机则输出 NONE。同额定值的电机保持目录原有顺序。",
    "hint": "Sort only by rating. In the search, if a midpoint qualifies, keep searching the half that may contain an earlier qualifying motor.",
    "hintZh": "只用额定值作排序键。若中点达标，继续检查可能含有更早达标项的半段。",
    "level": "Hard",
    "topic": "Recap · stable key sort and binary search",
    "topicZh": "综合 · 稳定键排序与二分查找",
    "starter": "n = int(input())\nmotors = []\n# Write your solution here.\n",
    "solution": "n = int(input())\nmotors = []\nfor _ in range(n):\n    name, value = input().split()\n    motors.append((name, int(value)))\nminimum = int(input())\nmotors.sort(key=lambda m: m[1])\nlo, hi = 0, n\nwhile lo < hi:\n    mid = (lo + hi) // 2\n    if motors[mid][1] < minimum:\n        lo = mid + 1\n    else:\n        hi = mid\nif lo == n:\n    print('NONE')\nelse:\n    print(*motors[lo], lo)\n",
    "tests": [
      {
        "input": "4\nY 5\nA 5\nB 2\nC 9\n3",
        "output": "Y 5 1"
      },
      {
        "input": "0\n4",
        "output": "NONE"
      },
      {
        "input": "2\nP -1\nQ 5\n6",
        "output": "NONE"
      },
      {
        "input": "3\na 4\nb -2\nc -2\n-2",
        "output": "b -2 0"
      }
    ],
    "recap": true
  },
  {
    "id": "L9-1",
    "unit": "L9",
    "title": "Build a stepped support",
    "en": "A support of height 0 needs no blocks. At each new height h, add a row of 2h − 1 blocks to an intact support of height h − 1. Write a recursive blocks(h) that returns the total. Read a single integer 0 ≤ h ≤ 100 and print its block count.",
    "zh": "高度为 0 的支架需要 0 块积木。搭建高度为 h 的支架时，在高度为 h − 1 的完整支架上新增一排 2h − 1 块积木。编写递归函数 blocks(h) 返回总块数。输入一个整数 0 ≤ h ≤ 100，输出所需块数。",
    "titleZh": "层叠支架所需块数",
    "starter": "def blocks(h):\n    pass\n\n\nprint(blocks(int(input())))\n",
    "solution": "def blocks(h):\n    if h == 0:\n        return 0\n    return blocks(h - 1) + 2 * h - 1\n\n\nprint(blocks(int(input())))\n",
    "tests": [
      {
        "input": "4",
        "output": "16"
      },
      {
        "input": "0",
        "output": "0"
      },
      {
        "input": "1",
        "output": "1"
      },
      {
        "input": "10",
        "output": "100"
      }
    ],
    "hint": "The smaller call counts every earlier row. Add only the new row to its answer.",
    "hintZh": "较小规模的递归调用已统计此前所有行，只需加上新增的一行。",
    "level": "Easy",
    "topic": "Recursive base cases",
    "topicZh": "递归终止条件"
  },
  {
    "id": "L9-2",
    "unit": "L9",
    "title": "Mirrored label repairs",
    "en": "A label must read the same backwards and forwards. One operation replaces one character. Write a recursive function repairs(label) to return the minimum number of replacements needed. Read one line of 0 to 100 lowercase ASCII letters and print the minimum. Characters may be replaced with any lowercase letter.",
    "zh": "合格标签从左往右与从右往左读时完全相同。每次操作可将一个字符替换成任意小写英文字母。编写递归函数 repairs(label) 计算最少替换次数。输入一行 0 至 100 个小写英文字母，输出最少次数。",
    "titleZh": "修复镜像标签",
    "starter": "def repairs(label):\n    pass\n\n\nprint(repairs(input()))\n",
    "solution": "def repairs(label):\n    if len(label) < 2:\n        return 0\n    cost = int(label[0] != label[-1])\n    return cost + repairs(label[1:-1])\n\n\nprint(repairs(input()))\n",
    "tests": [
      {
        "input": "abxcy",
        "output": "2"
      },
      {
        "input": "abba",
        "output": "0"
      },
      {
        "input": "\n",
        "output": "0"
      },
      {
        "input": "x",
        "output": "0"
      },
      {
        "input": "abca",
        "output": "1"
      }
    ],
    "hint": "Each unequal outer pair costs exactly one replacement. Its interior is a smaller copy of the problem.",
    "hintZh": "一对不相等的首尾字符恰需一次替换，去掉这对字符后，内部是同类的较小问题。",
    "level": "Medium",
    "topic": "Recursive string checks",
    "topicZh": "递归字符串比较"
  },
  {
    "id": "L9-3",
    "unit": "L9",
    "title": "Count leaves at depth",
    "en": "A sensor tree is either an integer leaf or a list of child trees. Read the tree as one JSON line and a nonnegative depth d on the next line. The root has depth 0; every child is one level deeper. Write count_at(tree, d) to count integer leaves at exactly depth d. Print the returned count as an integer. Empty lists contain no leaves. Nesting depth is at most 30.",
    "zh": "传感器树可以是一个整数叶子，也可以是由多棵子树组成的列表。第一行输入 JSON 格式的树，第二行输入非负整数深度 d。根的深度为 0，每经过一层子节点深度增加 1。编写 count_at(tree, d)，返回恰好位于深度 d 的整数叶子数。输出函数返回的整数。空列表不含叶子。最多嵌套 30 层。",
    "titleZh": "统计指定深度的叶子",
    "starter": "def count_at(tree, d):\n    pass\n\n\nimport json\ntree = json.loads(input())\nprint(count_at(tree, int(input())))\n",
    "solution": "def count_at(tree, d):\n    if d == 0:\n        return int(isinstance(tree, int))\n    if isinstance(tree, int):\n        return 0\n    return sum(count_at(child, d - 1) for child in tree)\n\n\nimport json\ntree = json.loads(input())\nprint(count_at(tree, int(input())))\n",
    "tests": [
      {
        "input": "[1,[2,3],[[4]],[]]\n2",
        "output": "2"
      },
      {
        "input": "7\n0",
        "output": "1"
      },
      {
        "input": "[]\n0",
        "output": "0"
      },
      {
        "input": "[1,[2,3],[[4]],[]]\n3",
        "output": "1"
      },
      {
        "input": "[2,3]\n5",
        "output": "0"
      }
    ],
    "hint": "At depth zero, count the current object only if it is an integer. For a list above the target depth, combine one answer per child.",
    "hintZh": "剩余深度为零时，仅当当前对象是整数才计数。若尚未到指定深度且遇到列表，将所有子节点的答案相加。",
    "level": "Hard",
    "topic": "Nested recursion",
    "topicZh": "嵌套递归"
  },
  {
    "id": "L9-4",
    "unit": "L9",
    "title": "Merge arrival labels",
    "en": "Two desks each record nondecreasing integer arrival times. Read two lines of times, one per desk; either may be blank. Merge the times in ascending order, breaking ties in favour of desk A (line 1). For each entry, output its desk letter followed immediately by its zero-based index within that desk. Separate labels with spaces. Print EMPTY if both desks have no entries.",
    "zh": "两个服务台各自按非递减顺序记录到达时刻。输入两行整数时刻，每个服务台一行，任一行均可为空。将时刻升序合并；时刻相同时先取 A 台（第一行）的记录。对每条记录，输出服务台字母和紧随其后的台内下标（从 0 开始）。标签间用空格分隔。若两台均无记录则输出 EMPTY。",
    "titleZh": "合并到达记录",
    "starter": "def merge_labels(a, b):\n    pass\n\n\na = list(map(int, input().split()))\nb = list(map(int, input().split()))\nlabels = merge_labels(a, b)\nprint(*labels) if labels else print(\"EMPTY\")\n",
    "solution": "def merge_labels(a, b):\n    i = j = 0\n    labels = []\n    while i < len(a) and j < len(b):\n        if a[i] <= b[j]:\n            labels.append(\"A\" + str(i))\n            i += 1\n        else:\n            labels.append(\"B\" + str(j))\n            j += 1\n    labels.extend(\"A\" + str(k) for k in range(i, len(a)))\n    labels.extend(\"B\" + str(k) for k in range(j, len(b)))\n    return labels\n\n\na = list(map(int, input().split()))\nb = list(map(int, input().split()))\nlabels = merge_labels(a, b)\nprint(*labels) if labels else print(\"EMPTY\")\n",
    "tests": [
      {
        "input": "2 4 4\n1 4 7",
        "output": "B0 A0 A1 A2 B1 B2"
      },
      {
        "input": "\n2 3",
        "output": "B0 B1"
      },
      {
        "input": "1\n\n",
        "output": "A0"
      },
      {
        "input": "\n\n",
        "output": "EMPTY"
      },
      {
        "input": "0 0\n0 0",
        "output": "A0 A1 B0 B1"
      }
    ],
    "hint": "Keep one index per list. A tie advances A; when one side empties, take the rest of the other.",
    "hintZh": "为两个列表各保存一个下标。相等时先移动 A 台下标。一台取完后，追加另一台的剩余记录。",
    "level": "Medium",
    "topic": "Stable merge",
    "topicZh": "稳定归并"
  },
  {
    "id": "L9-5",
    "unit": "L9",
    "title": "Count merge comparisons",
    "en": "Read a line of up to 100 integers (possibly blank). Implement ascending merge sort: split each list of length at least 2 at len(values) // 2, sort both halves recursively, and merge them. Count one comparison whenever the current heads of two nonempty halves are compared. On equality take the left head; appending a remaining tail costs no comparison. Print just the total comparison count across all merges.",
    "zh": "输入一行最多 100 个整数，可为空行。编写升序归并排序。长度至少为 2 时，在 len(values) // 2 处分成左右两段，递归排序两段再合并。每次比较两个非空段的当前首项计一次；相等时优先取左侧，追加某一侧剩余元素时不计比较。仅输出所有归并过程的总比较次数。",
    "titleZh": "统计归并比较次数",
    "starter": "def sort_count(values):\n    pass\n\n\nvalues = list(map(int, input().split()))\nordered, comparisons = sort_count(values)\nprint(comparisons)\n",
    "solution": "def sort_count(values):\n    if len(values) < 2:\n        return values, 0\n    mid = len(values) // 2\n    left, left_count = sort_count(values[:mid])\n    right, right_count = sort_count(values[mid:])\n    comparisons = left_count + right_count\n    merged = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        comparisons += 1\n        if left[i] <= right[j]:\n            merged.append(left[i])\n            i += 1\n        else:\n            merged.append(right[j])\n            j += 1\n    return merged + left[i:] + right[j:], comparisons\n\n\nvalues = list(map(int, input().split()))\nordered, comparisons = sort_count(values)\nprint(comparisons)\n",
    "tests": [
      {
        "input": "4 1 3 2",
        "output": "5"
      },
      {
        "input": "\n",
        "output": "0"
      },
      {
        "input": "3",
        "output": "0"
      },
      {
        "input": "1 1 1",
        "output": "2"
      },
      {
        "input": "5 4 3 2 1",
        "output": "7"
      }
    ],
    "hint": "Return the sorted items and a count together. Add both child counts to the comparisons in the current merge.",
    "hintZh": "让每次调用同时返回有序列表和比较次数，将左右两侧返回的次数与本次合并的次数相加。",
    "level": "Hard",
    "topic": "Merge sort",
    "topicZh": "归并排序"
  },
  {
    "id": "L9-6",
    "unit": "L9",
    "title": "Skip-factor product",
    "titleZh": "隔项阶乘积",
    "en": "For a nonnegative integer N ≤ 100, define a product P(0)=P(1)=1 and P(N)=N × P(N−2) when N ≥ 2. Read N and print P(N). Implement P recursively.",
    "zh": "对非负整数 N ≤ 100，定义 P(0)=P(1)=1；N ≥ 2 时 P(N)=N × P(N−2)。读入 N，递归实现 P 并输出 P(N)。",
    "hint": "A step of two can terminate at 0 or 1.",
    "hintZh": "每次减二可能在 0 或 1 终止。",
    "level": "Easy",
    "topic": "Recursive reduction",
    "topicZh": "递归缩小问题",
    "starter": "def product(n):\n    pass\n\nprint(product(int(input())))\n",
    "solution": "def product(n):\n    if n < 2:\n        return 1\n    return n * product(n - 2)\nprint(product(int(input())))\n",
    "tests": [
      {
        "input": "6",
        "output": "48"
      },
      {
        "input": "5",
        "output": "15"
      },
      {
        "input": "0",
        "output": "1"
      },
      {
        "input": "1",
        "output": "1"
      },
      {
        "input": "2",
        "output": "2"
      }
    ]
  },
  {
    "id": "L9-7",
    "unit": "L9",
    "title": "Split a batch",
    "titleZh": "拆分批次",
    "en": "Read N and K on one line, both from 1 to 100000. A batch of size at most K stays whole. Any larger batch splits into sizes N//2 and N−N//2, applying the same rule to each child with its own size. Print the number of final batches and the largest final batch size.",
    "zh": "一行读入 N 和 K，均在 1 到 100000 之间。批次大小不超过 K 时保持原样；更大的批次按当前大小 n 拆成 n//2 和 n−n//2，再对子批次遵循同一规则。输出最终批次数量和最大的最终批次大小。",
    "hint": "Each recursive result can be a pair. Combine counts by addition and sizes by maximum.",
    "hintZh": "递归结果可用一对数表示。数量相加，大小取最大值。",
    "level": "Medium",
    "topic": "Divide-and-conquer leaves",
    "topicZh": "分治递归的叶子",
    "starter": "def split_batch(n, limit):\n    pass\n\nn, limit = map(int, input().split())\n# Print the resulting count and maximum.\n",
    "solution": "def split_batch(n, limit):\n    if n <= limit:\n        return 1, n\n    left_n, left_max = split_batch(n // 2, limit)\n    right_n, right_max = split_batch(n - n // 2, limit)\n    return left_n + right_n, max(left_max, right_max)\nn, limit = map(int, input().split())\nprint(*split_batch(n, limit))\n",
    "tests": [
      {
        "input": "11 3",
        "output": "4 3"
      },
      {
        "input": "1 5",
        "output": "1 1"
      },
      {
        "input": "5 1",
        "output": "5 1"
      },
      {
        "input": "6 6",
        "output": "1 6"
      },
      {
        "input": "13 5",
        "output": "4 4"
      }
    ]
  },
  {
    "id": "L9-8",
    "unit": "L9",
    "title": "Return route",
    "titleZh": "原路返回",
    "en": "Read a line of space-separated distinct station names (possibly blank, at most 100 names). Visit them in order by recursion. Print ENTER followed by a space and the current name before the call to the next station. Print LEAVE followed by a space and that name when the call returns. For an empty route print only IDLE.",
    "zh": "读入一行空格分隔且不重复的站名（可为空，最多 100 个）。按输入顺序递归访问各站。递归前输出 ENTER、一个空格及当前站名；从下一站返回后输出 LEAVE、一个空格及当前站名。空路线只输出 IDLE。",
    "hint": "One active call owns both messages for the same station.",
    "hintZh": "同一层调用负责同一个站点的一进一出两条消息。",
    "level": "Medium",
    "topic": "Recursive unwinding",
    "topicZh": "递归返回顺序",
    "starter": "stations = input().split()\n# Write your solution here.\n",
    "solution": "stations = input().split()\ndef visit(i):\n    if i == len(stations):\n        return\n    print('ENTER', stations[i])\n    visit(i + 1)\n    print('LEAVE', stations[i])\nif stations:\n    visit(0)\nelse:\n    print('IDLE')\n",
    "tests": [
      {
        "input": "A B C",
        "output": "ENTER A\nENTER B\nENTER C\nLEAVE C\nLEAVE B\nLEAVE A"
      },
      {
        "input": "Gate",
        "output": "ENTER Gate\nLEAVE Gate"
      },
      {
        "input": "\n",
        "output": "IDLE"
      },
      {
        "input": "X Z",
        "output": "ENTER X\nENTER Z\nLEAVE Z\nLEAVE X"
      }
    ]
  },
  {
    "id": "L9-9",
    "unit": "L9",
    "title": "Count crossed pairs",
    "titleZh": "统计逆序对",
    "en": "Read a possibly blank line containing at most 10000 integers. A crossed pair is a pair of indices i < j with values[i] > values[j]. Print the number of crossed pairs. Use merge sort to count pairs between the halves while merging them.",
    "zh": "读入一行不超过 10000 个整数（可以是空行）。对于索引 i < j，若 values[i] > values[j]，称为一个逆序对。输出逆序对数量。使用归并排序，在合并两个半区期间统计跨越半区的逆序对。",
    "hint": "If the next right-hand value is smaller than the next left-hand value, it is smaller than every remaining left-hand value.",
    "hintZh": "若右边当前项小于左边当前项，它也小于左边所有未取出的项。",
    "level": "Hard",
    "topic": "Merging and inversions",
    "topicZh": "归并与逆序对",
    "starter": "values = list(map(int, input().split()))\n# Write your solution here.\n",
    "solution": "values = list(map(int, input().split()))\ndef sort_count(items):\n    if len(items) < 2:\n        return items, 0\n    mid = len(items) // 2\n    a, left = sort_count(items[:mid])\n    b, right = sort_count(items[mid:])\n    total = left + right\n    merged = []\n    i = j = 0\n    while i < len(a) and j < len(b):\n        if a[i] <= b[j]:\n            merged.append(a[i])\n            i += 1\n        else:\n            merged.append(b[j])\n            j += 1\n            total += len(a) - i\n    return merged + a[i:] + b[j:], total\nprint(sort_count(values)[1])\n",
    "tests": [
      {
        "input": "3 1 2 1",
        "output": "4"
      },
      {
        "input": "2 2 2",
        "output": "0"
      },
      {
        "input": "5 4 3 2 1",
        "output": "10"
      },
      {
        "input": "\n",
        "output": "0"
      },
      {
        "input": "-2 1 -3",
        "output": "2"
      }
    ]
  },
  {
    "id": "L9-10",
    "unit": "L9",
    "title": "Median of a box tree",
    "titleZh": "嵌套箱的中位读数",
    "en": "A box is either an integer reading or a pair of boxes represented by a JSON array with exactly two elements. Read one box on one line, at most 1000 readings and at most 40 levels deep. Recursively return a sorted list of readings from each box: a leaf returns one reading, and a pair merges its children’s sorted results. Print the number of readings, the lower median and the upper median. For an odd count, print the same median twice. Keep duplicate readings.",
    "zh": "一个箱子可以是整数读数，也可以是含两个子箱的 JSON 数组。一行读入一棵箱树，最多 1000 个读数，深度不超过 40 层。递归地返回每个箱子的有序读数列表：叶子只返回一个读数，成对的箱子则归并两个子结果。输出读数个数、下中位数、上中位数。奇数个读数时两个中位数相同。保留重复值。",
    "hint": "The base case returns a list with one element. After the final merge, the median indices are (n−1)//2 and n//2.",
    "hintZh": "基本情形返回仅含一项的列表。最终归并完毕后，两个中位数的索引分别是 (n−1)//2 和 n//2。",
    "level": "Hard",
    "topic": "Recap · nested recursion, stable merge and selection",
    "topicZh": "综合 · 嵌套递归、归并与选取",
    "starter": "import json\nroot = json.loads(input())\n# Write your solution here.\n",
    "solution": "import json\nroot = json.loads(input())\ndef ordered(box):\n    if isinstance(box, int):\n        return [box]\n    left, right = (ordered(child) for child in box)\n    result = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            result.append(left[i])\n            i += 1\n        else:\n            result.append(right[j])\n            j += 1\n    return result + left[i:] + right[j:]\n\nvalues = ordered(root)\nn = len(values)\nprint(n, values[(n - 1) // 2], values[n // 2])\n",
    "tests": [
      {
        "input": "[[9,1],[5,2]]",
        "output": "4 2 5"
      },
      {
        "input": "0",
        "output": "1 0 0"
      },
      {
        "input": "[[4,4],-1]",
        "output": "3 4 4"
      },
      {
        "input": "[-9,[-4,[3,2]]]",
        "output": "4 -4 2"
      },
      {
        "input": "[1,1]",
        "output": "2 1 1"
      }
    ],
    "recap": true
  },
  {
    "id": "M-1",
    "unit": "M",
    "title": "Three Views of a Log",
    "titleZh": "同一份日志的三个视图",
    "level": "Easy",
    "topic": "Tracing · list aliasing",
    "en": "A logger creates three names in this order: live = readings, snapshot = live[:], observer = live. Then it adds delta to the last value of live, removes the first value through observer, and appends that removed value to snapshot. What does each name see at the end?\n\nRead a nonempty line of space-separated integers, then an integer delta on the next line. Print live, snapshot and observer on three lines, using Python list notation. A list can become empty. Trace the single-reading case before running your program.",
    "zh": "记录器依次执行 live = readings、snapshot = live[:]、observer = live。然后给 live 的最后一个值加上 delta，通过 observer 删除首项，再把刚删除的值追加到 snapshot。最后三个名字各会看到什么？\n\n第一行是至少一个用空格分隔的整数，第二行是整数 delta。按照 live、snapshot、observer 的顺序，每行用 Python 列表格式输出一个结果。列表可能变为空。运行前先手推只有一个读数的情况。",
    "hint": "Draw one box for each list object. Which variable points to a separate box?",
    "hintZh": "每个列表对象画一个框。哪个变量指向独立的框？",
    "starter": "readings = list(map(int, input().split()))\ndelta = int(input())\n# Trace the updates, then print the three lists.\n",
    "solution": "readings = list(map(int, input().split()))\ndelta = int(input())\nlive = readings\nsnapshot = live[:]\nobserver = live\nlive[-1] += delta\nsnapshot.append(observer.pop(0))\nprint(live)\nprint(snapshot)\nprint(observer)\n",
    "tests": [
      {
        "input": "4 6 8\n3",
        "output": "[6, 11]\n[4, 6, 8, 4]\n[6, 11]"
      },
      {
        "input": "7\n2",
        "output": "[]\n[7, 9]\n[]"
      },
      {
        "input": "0 0\n0",
        "output": "[0]\n[0, 0, 0]\n[0]"
      },
      {
        "input": "-3 4 2\n-6",
        "output": "[4, -4]\n[-3, 4, 2, -3]\n[4, -4]"
      }
    ],
    "topicZh": "程序追踪 · 列表别名"
  },
  {
    "id": "M-2",
    "unit": "M",
    "title": "Repair the Jump Detector",
    "titleZh": "修复跳变检测函数",
    "level": "Medium",
    "topic": "Debugging · boundary cases",
    "en": "Repair the supplied first_jump function. An upward jump is a pair of consecutive readings whose later value minus its predecessor is strictly greater than limit. Return the zero-based index of the later reading in the first such pair. Return None when there is no jump.\n\nThe first line contains count (0–40) and a nonnegative integer limit. The next count lines contain one integer each. The driver prints the return value. Find an input where equality matters and another where the first pair fails but a later pair qualifies.",
    "zh": "修复起始代码中的 first_jump。相邻两项中，后项减前项严格大于 limit，才算一次上跳。返回第一次上跳中后项的索引（从 0 开始）；没有则返回 None。\n\n首行给出 count（0–40）和非负整数 limit，后续 count 行各有一个整数。驱动代码打印函数返回值。尝试想出两个用例：一个恰好等于阈值，另一个是首对不合格但后面有合格项。",
    "hint": "Check both the comparison operator and the point at which the function declares failure.",
    "hintZh": "分别检查比较运算符，以及函数认定查找失败的位置。",
    "starter": "def first_jump(values, limit):\n    for i in range(1, len(values)):\n        if values[i] - values[i - 1] >= limit:\n            return i\n        else:\n            return None\n\ncount, limit = map(int, input().split())\nvalues = [int(input()) for _ in range(count)]\nprint(first_jump(values, limit))\n",
    "solution": "def first_jump(values, limit):\n    for i in range(1, len(values)):\n        if values[i] - values[i - 1] > limit:\n            return i\n    return None\n\ncount, limit = map(int, input().split())\nvalues = [int(input()) for _ in range(count)]\nprint(first_jump(values, limit))\n",
    "tests": [
      {
        "input": "4 4\n2\n6\n5\n11",
        "output": "3"
      },
      {
        "input": "0 3",
        "output": "None"
      },
      {
        "input": "2 5\n3\n8",
        "output": "None"
      },
      {
        "input": "3 0\n-3\n-1\n6",
        "output": "1"
      },
      {
        "input": "1 0\n5",
        "output": "None"
      },
      {
        "input": "4 2\n20\n8\n9\n7",
        "output": "None"
      }
    ],
    "topicZh": "程序调试 · 边界情况"
  },
  {
    "id": "M-3",
    "unit": "M",
    "title": "One-Way Relay",
    "titleZh": "单向接力路线",
    "level": "Hard",
    "topic": "Greedy search · sets",
    "en": "A radio message starts at the station on line 1. Line 2 gives n (0–50), followed by n directed links in the form source destination delay. Each station code consists of one or more ASCII letters and is compared without case, and delay is a positive integer.\n\nAt each station, choose its outgoing link with the smallest delay whose destination has never been visited. On equal delays choose the link listed first. Mark the starting station visited too. Stop when no link qualifies. Print the visited station codes in uppercase in visit order, separated by spaces on line 1, and the total delay on line 2.",
    "zh": "一条无线电消息从第一行给出的站点出发。第二行给出 n（0–50），接下来 n 行形如「起点 终点 延迟」，每行是一条有向连接。站点代码由英文字母组成，比较时忽略大小写，延迟为正整数。\n\n在当前站点，选一条通往尚未访问的站点且延迟最小的出站连接。延迟相同则选输入中靠前的一条。出发站也算已访问。无可选连接时停止。第一行按访问顺序输出大写站点代码，以空格分隔；第二行输出总延迟。",
    "hint": "Keep the visited codes in a set and the route in a list. Only replace a candidate when the new delay is strictly smaller.",
    "hintZh": "用集合记录访问过的代码、用列表保存顺序。只有新延迟严格更小时才更新候选项。",
    "starter": "station = input().upper()\nn = int(input())\nlinks = []\n# Read the links, then follow the relay rules.\n",
    "solution": "station = input().upper()\nlinks = []\nfor _ in range(int(input())):\n    source, dest, delay = input().split()\n    links.append((source.upper(), dest.upper(), int(delay)))\nroute = [station]\nseen = {station}\ntotal = 0\nwhile True:\n    best = None\n    for source, dest, delay in links:\n        if source == station and dest not in seen:\n            if best is None or delay < best[1]:\n                best = (dest, delay)\n    if best is None:\n        break\n    station, delay = best\n    total += delay\n    route.append(station)\n    seen.add(station)\nprint(*route)\nprint(total)\n",
    "tests": [
      {
        "input": "a\n5\nA b 4\na C 2\nC a 1\nc D 3\nC e 3",
        "output": "A C D\n5"
      },
      {
        "input": "HQ\n0",
        "output": "HQ\n0"
      },
      {
        "input": "z\n4\nz z 1\nz beta 3\nZ Alpha 3\nBETA z 1",
        "output": "Z BETA\n3"
      },
      {
        "input": "aa\n5\nb aa 2\nAA C 40\nAa c 3\nc B 2\nB d 1",
        "output": "AA C B D\n6"
      }
    ],
    "topicZh": "贪心搜索 · 集合"
  },
  {
    "id": "M-4",
    "unit": "M",
    "title": "The Longest Echo",
    "titleZh": "寻找最长双段回声",
    "level": "Hard",
    "topic": "Substrings · exhaustive search",
    "en": "A receiver records a word of 0–80 lowercase ASCII letters on one line. An echo is a nonempty contiguous substring made of two identical blocks, one immediately after the other. For example, in zabcabcq the echo is abcabc.\n\nPrint the longest echo. If several have the same maximum length, print the one with the earliest starting index. Print NONE when no echo exists. Blocks may contain repeated letters. The whole input may be an echo.",
    "zh": "接收器记录了一行由 0–80 个小写英文字母组成的字符串。「回声」是一段非空的连续子串，其前半段和后半段完全相同，例如 zabcabcq 中的 abcabc。\n\n输出最长回声。若最大长度并列，输出起点最靠前的一段。不存在时输出 NONE。每个半段本身也可以包含重复字母，整个输入也可以是一段回声。",
    "hint": "Choose a starting index and a block length. Compare consecutive slices of that length only when both fit.",
    "hintZh": "枚举起点和半段长度。确认两个半段都没有越界，再比较相邻切片。",
    "starter": "def longest_echo(word):\n    # Return the matching substring or 'NONE'.\n    pass\n\nprint(longest_echo(input()))\n",
    "solution": "def longest_echo(word):\n    for size in range(len(word) // 2, 0, -1):\n        for start in range(len(word) - 2 * size + 1):\n            mid = start + size\n            end = mid + size\n            if word[start:mid] == word[mid:end]:\n                return word[start:end]\n    return 'NONE'\n\nprint(longest_echo(input()))\n",
    "tests": [
      {
        "input": "zabcabcq",
        "output": "abcabc"
      },
      {
        "input": "aabb",
        "output": "aa"
      },
      {
        "input": "abca",
        "output": "NONE"
      },
      {
        "input": "\n",
        "output": "NONE"
      },
      {
        "input": "aaaaaa",
        "output": "aaaaaa"
      },
      {
        "input": "xyxybabab",
        "output": "xyxy"
      }
    ],
    "topicZh": "子串 · 穷举搜索"
  },
  {
    "id": "M-5",
    "unit": "M",
    "title": "Shortlist the Samples",
    "titleZh": "筛选并排列样本",
    "level": "Medium",
    "topic": "Filtering · stable sort",
    "en": "Complete shortlist(records, low, high). Keep samples with low ≤ reading ≤ high. Rank them by room code in ascending alphabetical order, then by reading in descending numerical order. When both keys tie, keep arrival order. Return the ranked labels in a new list and leave records unchanged.\n\nThe first line contains three integers n low high, with 0 ≤ n ≤ 50 and low ≤ high. Each of the next n lines contains label room reading. Labels are distinct uppercase words, rooms are uppercase words, and readings are integers. The driver prints ranked labels on one line and all original labels on the next, each space-separated. An empty line of labels is represented by EMPTY.",
    "zh": "补全 shortlist(records, low, high)。保留满足 low ≤ reading ≤ high 的样本。先按房间代码的字母升序，再按读数数值降序排列。两个排序键都相同时保留到达顺序。返回由排好序的标签组成的新列表，并保持 records 原样。\n\n首行是三个整数 n low high，其中 0 ≤ n ≤ 50，且 low ≤ high。接下来 n 行各含 label room reading。标签为互不相同的大写单词，房间为大写单词，读数为整数。驱动代码第一行打印入选标签，第二行按原顺序打印全部标签，每行以空格分隔。没有标签时，该行打印 EMPTY。",
    "hint": "In an ascending tuple key, negating a number reverses the order of just that field.",
    "hintZh": "元组排序键默认升序，对其中一个数值字段取负，可以只反转该字段的顺序。",
    "starter": "def shortlist(records, low, high):\n    # Return labels as a new list.\n    pass\n\nn, low, high = map(int, input().split())\nrecords = []\nfor _ in range(n):\n    label, room, reading = input().split()\n    records.append((label, room, int(reading)))\nprint(' '.join(shortlist(records, low, high)) or 'EMPTY')\nprint(' '.join(row[0] for row in records) or 'EMPTY')\n",
    "solution": "def shortlist(records, low, high):\n    kept = [item for item in records if low <= item[2] <= high]\n    ordered = sorted(kept, key=lambda item: (item[1], -item[2]))\n    return [item[0] for item in ordered]\n\nn, low, high = map(int, input().split())\nrecords = []\nfor _ in range(n):\n    label, room, reading = input().split()\n    records.append((label, room, int(reading)))\nprint(' '.join(shortlist(records, low, high)) or 'EMPTY')\nprint(' '.join(row[0] for row in records) or 'EMPTY')\n",
    "tests": [
      {
        "input": "5 0 9\nP B 9\nZ A 7\nA A 7\nH A 9\nR A 10",
        "output": "H Z A P\nP Z A H R"
      },
      {
        "input": "0 0 0",
        "output": "EMPTY\nEMPTY"
      },
      {
        "input": "2 1 3\nX A 0\nY B 4",
        "output": "EMPTY\nX Y"
      },
      {
        "input": "3 -3 -1\nL Z -1\nN A -3\nM A -1",
        "output": "M N L\nL N M"
      }
    ],
    "topicZh": "筛选 · 稳定排序"
  },
  {
    "id": "M-6",
    "unit": "M",
    "title": "Shallowest Fault",
    "titleZh": "最浅层的故障",
    "level": "Hard",
    "topic": "Recursion · nested lists",
    "en": "A diagnostic tree arrives as one JSON value: either an integer reading or a list of such trees. An integer is faulty when it is negative. The root has depth 0; entering a child of a list increases depth by 1. An empty list has no readings. Nesting depth is at most 12.\n\nComplete the recursive function shallowest_fault. Return (d, count), where d is the smallest depth of any faulty reading and count is the number of faulty readings at exactly d. If there are no faults, return (-1, 0). The driver prints the two integers separated by a space.",
    "zh": "输入是一行 JSON，表示一棵诊断树。每棵树是一个整数读数，或是由若干棵子树组成的列表。负数表示故障。根的深度为 0，每进入列表的一个子节点，深度加 1。空列表没有读数。嵌套深度最多为 12。\n\n补全递归函数 shallowest_fault，返回 (d, count)，其中 d 是故障读数出现的最小深度，count 是恰好位于该深度的故障读数个数。完全没有故障时返回 (-1, 0)。驱动代码用空格分隔输出两个整数。",
    "hint": "For each child with faults, add 1 to its reported depth. Replace the count for a shallower result and add counts only on a depth tie.",
    "hintZh": "对存在故障的每个子节点，把它返回的深度加 1。发现更浅的结果时替换计数，深度相同时才累加。",
    "starter": "import json\n\ndef shallowest_fault(tree):\n    # Return (depth, count).\n    pass\n\ntree = json.loads(input())\ndepth, count = shallowest_fault(tree)\nprint(depth, count)\n",
    "solution": "import json\n\ndef shallowest_fault(tree):\n    if isinstance(tree, int):\n        if tree < 0:\n            return (0, 1)\n        return (-1, 0)\n    best, count = -1, 0\n    for child in tree:\n        depth, hits = shallowest_fault(child)\n        if hits:\n            depth += 1\n            if best == -1 or depth < best:\n                best, count = depth, hits\n            elif depth == best:\n                count += hits\n    return best, count\n\ntree = json.loads(input())\ndepth, count = shallowest_fault(tree)\nprint(depth, count)\n",
    "tests": [
      {
        "input": "[[-8, -2], 4, -1, [-7], -3]",
        "output": "1 2"
      },
      {
        "input": "-9",
        "output": "0 1"
      },
      {
        "input": "[]",
        "output": "-1 0"
      },
      {
        "input": "[0, [[], 3]]",
        "output": "-1 0"
      },
      {
        "input": "[[[-6]], [-1, -2], [-3, [-4]]]",
        "output": "2 3"
      },
      {
        "input": "0",
        "output": "-1 0"
      }
    ],
    "topicZh": "递归 · 嵌套列表"
  },
  {
    "id": "M-7",
    "unit": "M",
    "title": "Trace the Booking Search",
    "titleZh": "追踪预约查找过程",
    "level": "Medium",
    "topic": "Binary search · tracing",
    "en": "Given a sorted list of appointment times, find the index of the earliest slot whose time is at least the request. Several slots can have the same time. Use this exact binary search so its trace can be checked.\n\nStart with low = 0, high = n − 1. While low ≤ high, record mid = (low + high) // 2. If times[mid] meets the request, save mid and continue to its left (high = mid − 1). Otherwise continue to its right (low = mid + 1). Read n (0–64), a line of n space-separated integers in ascending order (blank if n = 0), and the requested integer time on the last line. Print the result index, or -1, then print all examined indices on the next line, space-separated. Print NONE for an empty trace.",
    "zh": "给定按时间升序排列的预约列表，找出第一个时间不早于请求时间的位置。时间可重复。请使用下面的二分查找，使检查过程也能核对。\n\n初始 low = 0、high = n − 1。当 low ≤ high 时，记录 mid = (low + high) // 2。若 times[mid] 满足要求，保存 mid，然后继续向左查（high = mid − 1）；否则向右查（low = mid + 1）。第一行是 n（0–64），第二行有 n 个空格分隔的升序整数（n 为 0 时为空行），末行是请求时间。第一行输出结果索引，找不到则输出 -1。第二行按顺序输出所有检查过的索引，以空格分隔；没有检查过则输出 NONE。",
    "hint": "An eligible middle slot is a candidate. An earlier eligible slot can still exist to its left.",
    "hintZh": "中间位置符合要求时，先记作候选；它左侧仍可能存在更早的合格位置。",
    "starter": "n = int(input())\ntimes = list(map(int, input().split()))\nrequest = int(input())\n# Track both the saved index and the examined indices.\n",
    "solution": "n = int(input())\ntimes = list(map(int, input().split()))\nrequest = int(input())\nlow, high = 0, n - 1\nfound = -1\ntrace = []\nwhile low <= high:\n    mid = (low + high) // 2\n    trace.append(mid)\n    if times[mid] >= request:\n        found = mid\n        high = mid - 1\n    else:\n        low = mid + 1\nprint(found)\nprint(' '.join(map(str, trace)) or 'NONE')\n",
    "tests": [
      {
        "input": "6\n2 4 4 4 9 10\n4",
        "output": "1\n2 0 1"
      },
      {
        "input": "0\n\n8",
        "output": "-1\nNONE"
      },
      {
        "input": "3\n1 3 4\n8",
        "output": "-1\n1 2"
      },
      {
        "input": "4\n3 5 7 9\n-1",
        "output": "0\n1 0"
      },
      {
        "input": "5\n2 6 9 13 17\n10",
        "output": "3\n2 3"
      }
    ],
    "topicZh": "二分查找 · 程序追踪"
  },
  {
    "id": "M-8",
    "unit": "M",
    "title": "Restart the Observatory",
    "titleZh": "重启天文台",
    "level": "Medium",
    "topic": "State tracking · command parsing",
    "en": "Replay a puzzle adventure from its command log. Start with an empty inventory, the power off and a closed dome. Read n (0–60), then n one-word commands, ignoring letter case.\n\nCELL and LENS each add the named item if it is missing. POWER works only when you have CELL. OPEN works only after POWER has succeeded and you have LENS. RESET clears both items and switches the power off. Opening the dome wins immediately: ignore later commands. A command that is unknown, blocked, or repeats an action with no effect changes nothing. Print WON followed by the 1-based command number of the win. If the dome stays closed, print WAIT followed by the number of state-changing commands, counting a RESET only if it actually cleared something.",
    "zh": "按命令日志重放一次解谜。初始背包为空，电源关闭，穹顶关闭。先读 n（0–60），再读 n 行单词命令，忽略大小写。\n\nCELL、LENS 分别将同名物品放入背包，已有则无变化。拥有 CELL 才能执行 POWER 通电。已通电且拥有 LENS 才能执行 OPEN 打开穹顶。RESET 清空两件物品并断电。穹顶一旦打开立即获胜，此后命令全部忽略。未知、被阻止或重复且无效果的命令均不改变状态。获胜时输出 WON 和获胜命令的序号（从 1 开始）；否则输出 WAIT 和改变过状态的命令数量，二者之间用空格。只有实际清除了状态的 RESET 才计数。",
    "hint": "Track inventory and power separately. Before counting an action, check whether it truly changed either one.",
    "hintZh": "分别记录背包和供电状态。累计有效操作前，检查这条命令是否真的改变了状态。",
    "starter": "n = int(input())\ncommands = [input().upper() for _ in range(n)]\n# Replay the commands and report the result.\n",
    "solution": "n = int(input())\ncommands = [input().upper() for _ in range(n)]\nitems = set()\npowered = False\nchanges = 0\nfor turn, cmd in enumerate(commands, start=1):\n    if cmd in {'CELL', 'LENS'} and cmd not in items:\n        items.add(cmd)\n    elif cmd == 'POWER' and 'CELL' in items and not powered:\n        powered = True\n    elif cmd == 'OPEN' and powered and 'LENS' in items:\n        print('WON', turn)\n        break\n    elif cmd == 'RESET' and (items or powered):\n        items.clear()\n        powered = False\n    else:\n        continue\n    changes += 1\nelse:\n    print('WAIT', changes)\n",
    "tests": [
      {
        "input": "8\nOPEN\nlens\nPOWER\ncell\nCELL\npower\nopen\nRESET",
        "output": "WON 7"
      },
      {
        "input": "0",
        "output": "WAIT 0"
      },
      {
        "input": "8\nRESET\nPOWER\nCELL\nPOWER\nPOWER\nRESET\nRESET\nOPEN",
        "output": "WAIT 3"
      },
      {
        "input": "7\nLENS\nRESET\nCELL\nPOWER\nOPEN\nUNKNOWN\nCELL",
        "output": "WAIT 4"
      },
      {
        "input": "6\ncell\nPower\nLENS\nOPEN\nRESET\nOPEN",
        "output": "WON 4"
      }
    ],
    "topicZh": "状态追踪 · 命令解析"
  },
  {
    "id": "M-9",
    "unit": "M",
    "title": "Repair the Arithmetic Display",
    "titleZh": "修复算术显示器",
    "level": "Easy",
    "topic": "Debugging · operators",
    "en": "Three lines in this program lost their intended arithmetic or formatting. The first output line must contain the floor quotient and remainder of a divided by b as integers. The second must show the negative of the square of a. The third must show the true quotient a / b with exactly two decimal places.\n\nRead integers a and b on one line (−99 ≤ a ≤ 99, 1 ≤ b ≤ 99). Repair the starter. Predict the entire display for a negative a before running it.",
    "zh": "程序中的三行代码有运算或格式错误。第一行应输出整数 a 除以 b 的向下取整商和余数，两个整数之间用空格分隔。第二行输出 a 的平方的相反数。第三行输出真除法 a / b 的结果，固定显示两位小数。\n\n输入一行两个整数 a 和 b（−99 ≤ a ≤ 99，1 ≤ b ≤ 99）。修复起始代码。运行前，先手算一组 a 为负数时的三行输出。",
    "hint": "The integer part of a true quotient rounds toward zero when converted with int(). Which operator rounds down instead?",
    "hintZh": "用 int() 转换真除法结果会向零截断，哪个运算符会向下取整？",
    "starter": "a, b = map(int, input().split())\nprint(int(a / b), a % b)\nprint((-a) ** 2)\nprint(round(a / b, 2))\n",
    "solution": "a, b = map(int, input().split())\nprint(a // b, a % b)\nprint(-(a ** 2))\nprint(f'{a / b:.2f}')\n",
    "tests": [
      {
        "input": "-7 3",
        "output": "-3 2\n-49\n-2.33"
      },
      {
        "input": "7 2",
        "output": "3 1\n-49\n3.50"
      },
      {
        "input": "0 7",
        "output": "0 0\n0\n0.00"
      },
      {
        "input": "-8 4",
        "output": "-2 0\n-64\n-2.00"
      },
      {
        "input": "5 4",
        "output": "1 1\n-25\n1.25"
      }
    ],
    "topicZh": "程序调试 · 运算符"
  },
  {
    "id": "M-10",
    "unit": "M",
    "title": "Trace the Counter Tape",
    "titleZh": "追踪计数器的记录带",
    "level": "Medium",
    "topic": "Tracing · nested loops",
    "en": "A counter visits checkpoints n, n − 2, n − 4, … while the checkpoint is positive. At each one, set a local counter to the checkpoint. Repeatedly subtract 3 while this counter is at least 3, counting the subtractions. Record a tuple (checkpoint, subtractions, remaining counter). After recording a tuple with remaining counter 0, stop the entire scan.\n\nRead n (0–30) on one line. Print the list of recorded tuples in reverse visit order, using Python notation. When n is zero, print []. For example, starting at 5 visits 5 and 3; the second record stops the scan.",
    "zh": "计数器按 n、n − 2、n − 4……依次访问正数检查点。在每个检查点，把局部计数器重置为其值。只要局部计数器至少为 3 就减 3，并统计减法次数。记录元组 (检查点, 减法次数, 剩余值)。如果本次剩余值为 0，记录该元组后立即停止整轮扫描。\n\n输入一行整数 n（0–30）。按访问顺序的倒序，用 Python 列表格式输出所有记录元组。n 为 0 时输出 []。例如，从 5 出发会访问 5 和 3，第二条记录会终止扫描。",
    "hint": "The scan can end at two different places: the range runs out, or a recorded remainder equals zero.",
    "hintZh": "扫描有两种结束方式：遍历完正数检查点，或者刚记录的余数为零。",
    "starter": "n = int(input())\ntape = []\n# Record each checkpoint and reverse the final tape.\n",
    "solution": "n = int(input())\ntape = []\nfor checkpoint in range(n, 0, -2):\n    remaining = checkpoint\n    count = 0\n    while remaining >= 3:\n        remaining -= 3\n        count += 1\n    tape.append((checkpoint, count, remaining))\n    if remaining == 0:\n        break\nprint(tape[::-1])\n",
    "tests": [
      {
        "input": "5",
        "output": "[(3, 1, 0), (5, 1, 2)]"
      },
      {
        "input": "0",
        "output": "[]"
      },
      {
        "input": "1",
        "output": "[(1, 0, 1)]"
      },
      {
        "input": "6",
        "output": "[(6, 2, 0)]"
      },
      {
        "input": "10",
        "output": "[(6, 2, 0), (8, 2, 2), (10, 3, 1)]"
      },
      {
        "input": "4",
        "output": "[(2, 0, 2), (4, 1, 1)]"
      }
    ],
    "topicZh": "程序追踪 · 嵌套循环"
  },
  {
    "id": "M-11",
    "unit": "M",
    "title": "Unwind the Call Log",
    "titleZh": "追踪递归返回日志",
    "level": "Medium",
    "topic": "Tracing · recursive calls",
    "en": "Complete a recursive function walk(k, log). Each call first appends the string +k to a shared list (for example, +6). A call with k = 0 sets its result to 0. Any other call obtains the result of walk(k // 2, log) and adds its own k. Just before returning, every call appends k=result to the same log. The base case logs its return too.\n\nRead a nonnegative integer n ≤ 100. Print the log entries in execution order separated by spaces. On line 2 print n and the result of walk(n, log), separated by a space. The driver already performs these two prints.",
    "zh": "补全递归函数 walk(k, log)。进入每次调用时，先向共享列表追加形如 +k 的字符串（如 +6）。当 k = 0 时，本次结果为 0；否则递归求 walk(k // 2, log)，再加上本层的 k。每次调用返回前，都向同一列表追加 k=结果。基例也要记录返回。\n\n输入一个不超过 100 的非负整数 n。第一行按执行顺序输出所有日志项，以空格分隔。第二行用空格分隔输出 n 和 walk(n, log) 的结果。驱动代码已完成这两行打印。",
    "hint": "Write the entry before making the smaller call. After it returns, use the k of the current call to log its result.",
    "hintZh": "发起更小的调用前先记录进入日志。递归返回后，用当前这一层自己的 k 记录结果。",
    "starter": "def walk(k, log):\n    # Record the entry and return, and give the caller the result.\n    pass\n\nn = int(input())\nlog = []\ntotal = walk(n, log)\nprint(*log)\nprint(n, total)\n",
    "solution": "def walk(k, log):\n    log.append(f'+{k}')\n    result = 0 if k == 0 else k + walk(k // 2, log)\n    log.append(f'{k}={result}')\n    return result\n\nn = int(input())\nlog = []\ntotal = walk(n, log)\nprint(*log)\nprint(n, total)\n",
    "tests": [
      {
        "input": "6",
        "output": "+6 +3 +1 +0 0=0 1=1 3=4 6=10\n6 10"
      },
      {
        "input": "0",
        "output": "+0 0=0\n0 0"
      },
      {
        "input": "1",
        "output": "+1 +0 0=0 1=1\n1 1"
      },
      {
        "input": "8",
        "output": "+8 +4 +2 +1 +0 0=0 1=1 2=3 4=7 8=15\n8 15"
      },
      {
        "input": "5",
        "output": "+5 +2 +1 +0 0=0 1=1 2=3 5=8\n5 8"
      }
    ],
    "topicZh": "程序追踪 · 递归调用"
  },
  {
    "id": "M-12",
    "unit": "M",
    "title": "Decode the Caption Index",
    "titleZh": "修复字幕字符索引",
    "level": "Medium",
    "topic": "Debugging · strings and dictionaries",
    "en": "Repair two mistakes in the caption indexer. The input is a single line of the form <say>text</say>, where text contains 0–50 ASCII letters. Remove exactly the opening and closing tags and convert the enclosed text to lowercase. Record each distinct letter in order of first appearance, along with its LAST zero-based index in the enclosed text.\n\nPrint letter:index fields separated by spaces, or EMPTY when the text has no letters. Check the effect of the supplied strip call on a caption that starts with s or ends with y.",
    "zh": "修复字幕索引器中的两个错误。输入一行，格式为 <say>text</say>，text 由 0–50 个英文字母组成。准确去掉开头和结尾的标签，并把其中的文本转成小写。按每个不同字母首次出现的顺序，记录它最后一次出现在正文中的位置（索引从 0 开始）。\n\n输出若干「字母:索引」，以空格分隔。正文为空时输出 EMPTY。可以用以 s 开头或以 y 结尾的正文检查起始代码中 strip 的效果。",
    "hint": "strip removes characters from a set at either end. Assigning a new value to an existing dictionary key preserves the key’s insertion order.",
    "hintZh": "strip 会从两端持续删除字符集合中的字符。给字典中已有的键更新值会保留这个键原本的插入顺序。",
    "starter": "doc = input()\ntext = doc.lower().strip('</say>')\nlast = {}\nfor i, letter in enumerate(text):\n    if letter not in last:\n        last[letter] = i\nprint(' '.join(f'{k}:{v}' for k, v in last.items()) or 'EMPTY')\n",
    "solution": "doc = input()\ntext = doc[5:-6].lower()\nlast = {}\nfor i, letter in enumerate(text):\n    last[letter] = i\nprint(' '.join(f'{k}:{v}' for k, v in last.items()) or 'EMPTY')\n",
    "tests": [
      {
        "input": "<say>Sassy</say>",
        "output": "s:3 a:1 y:4"
      },
      {
        "input": "<say>CbCB</say>",
        "output": "c:2 b:3"
      },
      {
        "input": "<say></say>",
        "output": "EMPTY"
      },
      {
        "input": "<say>Y</say>",
        "output": "y:0"
      },
      {
        "input": "<say>banana</say>",
        "output": "b:0 a:5 n:4"
      }
    ],
    "topicZh": "程序调试 · 字符串与字典"
  },
  {
    "id": "M-13",
    "unit": "M",
    "title": "Turn the seat map",
    "titleZh": "旋转座位图",
    "en": "Read positive R C and then R lines of exactly C characters each (letters or dots). Rotate the rectangular map 90 degrees clockwise. Print the resulting C rows of R characters with no spaces between characters.",
    "zh": "读入正整数 R C，再读 R 行座位图，每行恰好 C 个字符（字母或点号）。将矩形座位图顺时针旋转 90 度。输出 C 行，每行 R 个字符，字符之间没有空格。",
    "hint": "The first output row is the first input column read from bottom to top.",
    "hintZh": "输出的第一行是输入的第一列从下往上读。",
    "level": "Medium",
    "topic": "Nested lists · coordinates",
    "topicZh": "嵌套列表与坐标",
    "starter": "rows, cols = map(int, input().split())\ngrid = [input() for _ in range(rows)]\n# Write your solution here.\n",
    "solution": "rows, cols = map(int, input().split())\ngrid = [input() for _ in range(rows)]\nfor j in range(cols):\n    print(''.join(grid[i][j] for i in range(rows - 1, -1, -1)))\n",
    "tests": [
      {
        "input": "2 3\nA.B\nCD.",
        "output": "CA\nD.\n.B"
      },
      {
        "input": "1 3\nABC",
        "output": "A\nB\nC"
      },
      {
        "input": "3 1\nA\nB\nC",
        "output": "CBA"
      },
      {
        "input": "1 1\n.",
        "output": "."
      }
    ]
  },
  {
    "id": "M-14",
    "unit": "M",
    "title": "Check the cable drawing",
    "titleZh": "检查电缆图",
    "en": "Read a single line made only of (), [] and {} bracket characters. A closer must match the most recent unmatched opener. If a closer is wrong or has no opener, print its 1-based position. Otherwise print OPEN if some opener remains at the end, or OK if all pairs match. The empty line is valid.",
    "zh": "输入一行，只包含 ()、[]、{} 中的括号字符。每个闭括号应匹配最近一个尚未匹配的开括号。若闭括号类型错误或没有对应开括号，输出第一个此类闭括号的位置（从 1 开始）。否则，结束时若仍有开括号未匹配则输出 OPEN，全部匹配则输出 OK。空行也是有效输入。",
    "hint": "Use one list as a stack. Check for an empty stack before looking at its last item.",
    "hintZh": "用列表作为栈，查看末项前先检查栈是否为空。",
    "level": "Medium",
    "topic": "Stacks · first error",
    "topicZh": "栈与首次错误",
    "starter": "drawing = input()\n# Write your solution here.\n",
    "solution": "drawing = input()\nstack = []\npairs = {')': '(', ']': '[', '}': '{'}\nfor pos, ch in enumerate(drawing, 1):\n    if ch not in pairs:\n        stack.append(ch)\n    elif not stack or stack.pop() != pairs[ch]:\n        print(pos)\n        break\nelse:\n    print('OPEN' if stack else 'OK')\n",
    "tests": [
      {
        "input": "([)]",
        "output": "3"
      },
      {
        "input": "{[()]}",
        "output": "OK"
      },
      {
        "input": "(()",
        "output": "OPEN"
      },
      {
        "input": "]",
        "output": "1"
      },
      {
        "input": "\n",
        "output": "OK"
      }
    ]
  },
  {
    "id": "M-15",
    "unit": "M",
    "title": "Reschedule the arrivals",
    "titleZh": "安排先到先服务队列",
    "en": "One bench handles jobs one at a time from time 0. Read N ≥ 1, then N lines each containing a distinct job name, a nonnegative integer arrival time and a positive integer duration. Serve jobs by arrival time; ties keep input order. Start each job as soon as both it and the bench are available. For each job in service order print name, start time and finish time separated by spaces.",
    "zh": "一个工作台从时刻 0 开始，每次处理一个任务。先读 N ≥ 1，接着 N 行各给出不重复的任务名、非负整数到达时刻和正整数耗时。按到达顺序处理，同时到达的按输入顺序处理。到达且工作台空闲时立即开始。按处理顺序逐行输出任务名、开始和完成时刻，以空格分隔。",
    "hint": "Sort stably by arrival. An idle bench cannot start the next job before it arrives.",
    "hintZh": "按到达时刻稳定排序。即使工作台空闲，也要等到下一任务到达。",
    "level": "Medium",
    "topic": "Sorting · simulation",
    "topicZh": "排序与队列模拟",
    "starter": "n = int(input())\njobs = []\n# Write your solution here.\n",
    "solution": "n = int(input())\njobs = []\nfor _ in range(n):\n    name, arrival, duration = input().split()\n    jobs.append((name, int(arrival), int(duration)))\nfree = 0\nfor name, arrival, duration in sorted(jobs, key=lambda job: job[1]):\n    start = max(arrival, free)\n    free = start + duration\n    print(name, start, free)\n",
    "tests": [
      {
        "input": "3\nC 4 1\nA 2 4\nB 2 1",
        "output": "A 2 6\nB 6 7\nC 7 8"
      },
      {
        "input": "1\nX 8 2",
        "output": "X 8 10"
      },
      {
        "input": "2\nP 0 1\nK 5 3",
        "output": "P 0 1\nK 5 8"
      },
      {
        "input": "3\nZ 0 2\nY 0 2\nX 0 2",
        "output": "Z 0 2\nY 2 4\nX 4 6"
      }
    ]
  },
  {
    "id": "M-16",
    "unit": "M",
    "title": "Shortest full window",
    "titleZh": "最短达标窗口",
    "en": "Read a positive target T and a second line of positive integers (possibly blank, at most 10000 values). Find the shortest consecutive block whose sum is at least T. If lengths tie, choose the earliest start. Print its zero-based start index and its length, separated by a space. Print NONE when no block qualifies.",
    "zh": "读入正整数目标 T，第二行给出正整数序列（可为空行，最多 10000 项）。找出总和至少为 T 的最短连续片段，长度相同时选起点最靠前者。以空格分隔输出其零起始索引和长度。没有合适片段则输出 NONE。",
    "hint": "Because every value is positive, advancing the left end only decreases the sum. For each right end, shrink while the target still holds.",
    "hintZh": "所有值都为正，左端右移只会使总和变小。对每个右端，窗口达标时尝试收缩。",
    "level": "Hard",
    "topic": "Lists · window bounds",
    "topicZh": "列表与窗口边界",
    "starter": "target = int(input())\nvalues = list(map(int, input().split()))\n# Write your solution here.\n",
    "solution": "target = int(input())\nvalues = list(map(int, input().split()))\nleft = total = 0\nbest = None\nfor right, value in enumerate(values):\n    total += value\n    while total >= target:\n        candidate = (right - left + 1, left)\n        if best is None or candidate < best:\n            best = candidate\n        total -= values[left]\n        left += 1\nif best is None:\n    print('NONE')\nelse:\n    print(best[1], best[0])\n",
    "tests": [
      {
        "input": "7\n2 3 1 2 4 3",
        "output": "4 2"
      },
      {
        "input": "5\n3 2 3 2",
        "output": "0 2"
      },
      {
        "input": "9\n1 2 3",
        "output": "NONE"
      },
      {
        "input": "1\n\n",
        "output": "NONE"
      },
      {
        "input": "8\n1 9 8",
        "output": "1 1"
      }
    ]
  },
  {
    "id": "M-17",
    "unit": "M",
    "title": "Compare two manifests",
    "titleZh": "核对两份货单",
    "en": "Read the required parts as one space-separated line, then the delivered parts on the next line. Either line may be blank. Each occurrence is one unit. For every part that is still short, print the part name and missing quantity on one line, in alphabetical order. Ignore excess deliveries. Print COMPLETE if nothing is short. Part names are lowercase ASCII words.",
    "zh": "第一行给出所需零件，第二行给出已送达的零件，均以空格分隔，可以是空行。每出现一次代表一件。将所有缺少的零件按名称字母顺序逐行输出，每行给出名称和缺少数量。忽略多余的配送。如无短缺，只输出 COMPLETE。名称均为小写英文字母单词。",
    "hint": "Count the required units, then subtract each matching delivery. Report strictly positive balances.",
    "hintZh": "先统计需求数量，再逐项减掉对应的送达数量，只报告正余额。",
    "level": "Medium",
    "topic": "Dictionaries · multiplicity",
    "topicZh": "字典与出现次数",
    "starter": "required = input().split()\ndelivered = input().split()\n# Write your solution here.\n",
    "solution": "required = input().split()\ndelivered = input().split()\nbalance = {}\nfor name in required:\n    balance[name] = balance.get(name, 0) + 1\nfor name in delivered:\n    if name in balance:\n        balance[name] -= 1\nmissing = [name for name in sorted(balance) if balance[name] > 0]\nif not missing:\n    print('COMPLETE')\nfor name in missing:\n    print(name, balance[name])\n",
    "tests": [
      {
        "input": "pin gear pin cap cap\npin extra cap",
        "output": "cap 1\ngear 1\npin 1"
      },
      {
        "input": "a a\na a a",
        "output": "COMPLETE"
      },
      {
        "input": "\nx",
        "output": "COMPLETE"
      },
      {
        "input": "z a z\n\n",
        "output": "a 1\nz 2"
      }
    ]
  },
  {
    "id": "M-18",
    "unit": "M",
    "title": "Decode a strip of lamps",
    "titleZh": "解码灯带",
    "en": "Read one encoded line made of letters and digits. A valid line is one or more groups, each consisting of a single uppercase ASCII letter followed by a decimal count from 1 to 99 without a leading zero. Expand each group by repeating its letter that many times. Print the combined expansion, or INVALID if any part of the line violates the format. An empty line is invalid.",
    "zh": "输入一行由字母与数字组成的编码。有效编码至少有一组，每组恰为一个大写英文字母，后接 1 到 99 的十进制次数，不能有前导零。将各字母重复相应次数，拼接后输出。任何部分不符合格式，或整行为空，都输出 INVALID。",
    "hint": "After reading a letter, advance over the entire run of digits before validating its length and first digit.",
    "hintZh": "读完字母后，先取出后面连续的全部数字，再检查位数和首位。",
    "level": "Medium",
    "topic": "String parsing · validation",
    "topicZh": "字符串解析与校验",
    "starter": "code = input()\n# Write your solution here.\n",
    "solution": "code = input()\nparts = []\ni = 0\nvalid = bool(code)\nwhile valid and i < len(code):\n    letter = code[i]\n    i += 1\n    start = i\n    while i < len(code) and code[i].isdigit():\n        i += 1\n    count = code[start:i]\n    valid = 'A' <= letter <= 'Z' and 1 <= len(count) <= 2 and count[0] != '0'\n    if valid:\n        parts.append(letter * int(count))\nprint(''.join(parts) if valid else 'INVALID')\n",
    "tests": [
      {
        "input": "A3B2",
        "output": "AAABB"
      },
      {
        "input": "Z1Q10",
        "output": "ZQQQQQQQQQQ"
      },
      {
        "input": "A01",
        "output": "INVALID"
      },
      {
        "input": "A2B",
        "output": "INVALID"
      },
      {
        "input": "\n",
        "output": "INVALID"
      },
      {
        "input": "a1",
        "output": "INVALID"
      },
      {
        "input": "A100",
        "output": "INVALID"
      }
    ]
  },
  {
    "id": "M-19",
    "unit": "M",
    "title": "Join the covered minutes",
    "titleZh": "合并已覆盖时段",
    "en": "Read N ≥ 0 and then N integer half-open intervals start end, one per line with start < end. Each interval covers time from start up to but excluding end. Merge intervals that overlap or touch. Print the number of merged intervals and their total duration, separated by one space.",
    "zh": "先读 N ≥ 0，再读 N 个半开时间区间，每行两个整数 start end 且 start < end。区间覆盖起点但不含终点。把重叠或首尾相接的区间合并。输出合并后的区间数量及总时长，以一个空格分隔。",
    "hint": "Sort by start. When extending the current interval, the new end is the larger of the two ends.",
    "hintZh": "按起点排序，扩展区间时取原终点和新终点的较大值。",
    "level": "Hard",
    "topic": "Interval sorting · merging",
    "topicZh": "区间排序与合并",
    "starter": "n = int(input())\nintervals = [tuple(map(int, input().split())) for _ in range(n)]\n# Write your solution here.\n",
    "solution": "n = int(input())\nintervals = [tuple(map(int, input().split())) for _ in range(n)]\nmerged = []\nfor start, end in sorted(intervals):\n    if not merged or start > merged[-1][1]:\n        merged.append([start, end])\n    else:\n        merged[-1][1] = max(merged[-1][1], end)\nprint(len(merged), sum(end - start for start, end in merged))\n",
    "tests": [
      {
        "input": "4\n4 7\n1 3\n3 4\n9 10",
        "output": "2 7"
      },
      {
        "input": "0",
        "output": "0 0"
      },
      {
        "input": "3\n0 10\n3 5\n0 10",
        "output": "1 10"
      },
      {
        "input": "2\n-5 -2\n-1 2",
        "output": "2 6"
      }
    ]
  },
  {
    "id": "M-20",
    "unit": "M",
    "title": "Build a balanced tray",
    "titleZh": "构建平衡托盘",
    "en": "A tray is a JSON integer (a positive weight) or a list of exactly two trays. It is balanced if every pair of children has equal total weight and both children are balanced. A single weight is balanced. Read one JSON tray on one line, nested at most 50 levels deep. Print the total weight followed by BALANCED or TILTED on the same line.",
    "zh": "托盘用 JSON 表示：可以是一个正整数（重量），也可以是恰含两个托盘的列表。若每个左右子托盘的总重相等且两边内部也都平衡，则整个托盘平衡；单个重物视为平衡。输入一行 JSON，嵌套深度最多为 50。输出总重量，接一个空格及 BALANCED 或 TILTED。",
    "hint": "Return both a weight and a Boolean from each recursive call. Equal weight at the top alone is insufficient.",
    "hintZh": "每次递归同时返回重量和平衡状态；只检查顶层左右等重并不足够。",
    "level": "Hard",
    "topic": "Recursion · weighted trees",
    "topicZh": "递归与加权树",
    "starter": "import json\ntray = json.loads(input())\n# Write your solution here.\n",
    "solution": "import json\ntray = json.loads(input())\ndef inspect(node):\n    if isinstance(node, int):\n        return node, True\n    left, left_ok = inspect(node[0])\n    right, right_ok = inspect(node[1])\n    return left + right, left_ok and right_ok and left == right\ntotal, balanced = inspect(tray)\nprint(total, 'BALANCED' if balanced else 'TILTED')\n",
    "tests": [
      {
        "input": "[[2,2],4]",
        "output": "8 BALANCED"
      },
      {
        "input": "[[1,3],[2,2]]",
        "output": "8 TILTED"
      },
      {
        "input": "7",
        "output": "7 BALANCED"
      },
      {
        "input": "[1,2]",
        "output": "3 TILTED"
      },
      {
        "input": "[[1,1],[1,1]]",
        "output": "4 BALANCED"
      }
    ]
  },
  {
    "id": "C-1",
    "unit": "C",
    "title": "Campus sensor audit",
    "titleZh": "校园传感器巡检",
    "en": "A campus monitoring team has received one batch of sensor readings. Write audit(batch, low, high, target) to produce one report. The batch is a list. Each item is either a nested list or a string of the form station|value. Stations contain ASCII letters with optional surrounding spaces. Values are signed integers. Lists may be empty and nest up to 30 levels.\n\nRead the leaves from left to right, visiting each nested list before continuing with its next sibling. Strip spaces from station names and convert them to uppercase. Count every reading, including duplicates. A reading is an alert if it is below low or above high. Both limits are safe.\n\nReturn [rows, target_values]. Each row is [station, number_of_readings, number_of_alerts]. Include every observed station once. Sort first by alert count from highest to lowest, then by station name from A to Z. target_values is the list of that station’s integer readings in their original visit order. Normalize target the same way as station names. A missing station gives an empty list. Leave the original nested batch unchanged.\n\nThe supplied driver reads three lines: low and high, the target station, then the batch as JSON. It calls your function, checks the original batch and prints your return value. Complete the function above the driver.",
    "zh": "校园监测组收到一批嵌套存放的传感器读数。请完成 audit(batch, low, high, target)，提交一份完整报告。batch 是列表，每个元素可以是子列表，也可以是 station|value 形式的字符串。站名由英文字母组成，两端可能有空格。读数为有符号整数。列表可以为空，最多嵌套 30 层。\n\n从左到右读取记录。遇到子列表时，先处理完它的内容，再继续处理同级的下一项。站名需要去除两端空格并转成大写。每条记录都算一次，重复值也要保留。读数低于 low 或高于 high 时计一次报警，等于上下界均安全。\n\n返回 [rows, target_values]。rows 每行是 [站名, 读数条数, 报警次数]，每个出现过的站点占一行。先按报警次数降序排列，同分时按站名字母升序排列。target_values 是目标站按原始访问顺序排列的整数读数。用相同规则清洗 target；找不到站点时返回空列表。保留输入批次的原有内容。\n\n已提供的主程序读取三行：第一行是 low 和 high，第二行是目标站名，第三行是 JSON 格式的批次。主程序调用你的函数、检查输入批次是否被修改，并打印返回值。你只需补全上方的函数。",
    "level": "Hard",
    "topic": "L2–L9 · Full-course capstone",
    "topicZh": "L2–L9 · 全课程综合",
    "hint": "Walk the tree recursively and build a fresh dictionary of station → readings. Derive the table and the target list from that dictionary. For tied alert counts, check the second part of your sort key.",
    "hintZh": "递归访问嵌套列表，用新字典将站名映射到读数列表。用这个字典生成汇总表和目标站读数。报警次数相同时，检查排序键的第二项。",
    "starter": "def audit(batch, low, high, target):\n    # Build and return [rows, target_values].\n    pass\n\nimport json\nfrom copy import deepcopy\n\nlow, high = map(int, input().split())\ntarget = input()\nbatch = json.loads(input())\nbefore = deepcopy(batch)\nreport = audit(batch, low, high, target)\nif batch != before:\n    print(\"Input was modified\")\nelse:\n    print(repr(report))\n",
    "solution": "def audit(batch, low, high, target):\n    readings = {}\n\n    def visit(node):\n        if isinstance(node, list):\n            for child in node:\n                visit(child)\n            return\n        label, raw = node.split(\"|\")\n        station = label.strip().upper()\n        readings.setdefault(station, []).append(int(raw))\n\n    visit(batch)\n    rows = []\n    for station, values in readings.items():\n        alerts = sum(value < low or value > high for value in values)\n        rows.append([station, len(values), alerts])\n    rows.sort(key=lambda row: (-row[2], row[0]))\n    return [rows, readings.get(target.strip().upper(), [])]\n\nimport json\nfrom copy import deepcopy\n\nlow, high = map(int, input().split())\ntarget = input()\nbatch = json.loads(input())\nbefore = deepcopy(batch)\nreport = audit(batch, low, high, target)\nif batch != before:\n    print(\"Input was modified\")\nelse:\n    print(repr(report))\n",
    "tests": [
      {
        "input": "0 10\n west \n[\" East | 10\", [\"WEST|-2\", [], [\"east|13\", \"west|6\"]], \"NORTH|0\"]\n",
        "output": "[[['EAST', 2, 1], ['WEST', 2, 1], ['NORTH', 1, 0]], [-2, 6]]"
      },
      {
        "input": "5 5\nA\n[]\n",
        "output": "[[], []]"
      },
      {
        "input": "-2 2\nX\n[[[[]]], []]\n",
        "output": "[[], []]"
      },
      {
        "input": "0 0\nK\n[\"k|0\", \"K|0\", [\"k|+1\", \"K|-1\"]]\n",
        "output": "[[['K', 4, 2]], [0, 0, 1, -1]]"
      },
      {
        "input": "1 10\nmissing\n[\"Z|11\", \"A|1\", \"C|0\", \"B|8\"]\n",
        "output": "[[['C', 1, 1], ['Z', 1, 1], ['A', 1, 0], ['B', 1, 0]], []]"
      },
      {
        "input": "-3 -1\n m \n[[\" M | -3 \", [\"n|-1\"]], \"m|-2\", [\"N|-4\"]]\n",
        "output": "[[['N', 2, 1], ['M', 2, 0]], [-3, -2]]"
      },
      {
        "input": "10 20\nABC\n[\"D|1\", [\"AbC|20\", [\"d|9\", \"abc|10\"], \"d|15\"]]\n",
        "output": "[[['D', 3, 2], ['ABC', 2, 0]], [20, 10]]"
      },
      {
        "input": "1 1\nb\n[\"B|2\", [\"b|2\", [\"a|0\"]], \"A|3\", \"C|1\"]\n",
        "output": "[[['A', 2, 2], ['B', 2, 2], ['C', 1, 0]], [2, 2]]"
      },
      {
        "input": "0 10\nsolo\n[[[[[\" SOLO | +007 \"]]]]]\n",
        "output": "[[['SOLO', 1, 0]], [7]]"
      },
      {
        "input": "-1 1\ntop\n[\"Z|1\", [\"T|1\", \"A|0\"]]\n",
        "output": "[[['A', 1, 0], ['T', 1, 0], ['Z', 1, 0]], []]"
      }
    ]
  }
];
