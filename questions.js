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
  }
];
