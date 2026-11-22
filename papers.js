window.MOCK_PAPERS = [
  {
    "id": "1",
    "theme": "Parcel dispatch",
    "themeZh": "包裹调度",
    "questions": [
      {
        "kind": "trace",
        "ref": "1.1",
        "title": "Two readings from one dial",
        "titleZh": "同一刻度盘的两次读数",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "x = -14\nprint(x // 4, x % 4, x / 4)",
        "answer": "-4 2 -3.5",
        "why": "Floor division rounds −3.5 down to −4. The matching remainder is 2 because 4 × (−4) + 2 = −14. Ordinary division gives −3.5.",
        "whyZh": "向下取整把 −3.5 变为 −4。由 4 × (−4) + 2 = −14 得余数 2。普通除法结果为 −3.5。"
      },
      {
        "kind": "trace",
        "ref": "1.2",
        "title": "A numbered folder",
        "titleZh": "带编号的文件夹",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "tag = 8\nprint(f\"R{tag:02d}\", str(tag) * 2, 3 * tag, sep=\"/\")",
        "answer": "R08/88/24",
        "why": "The 02d field pads 8 to two digits. Repeating the string '8' yields '88', while multiplying the integer gives 24. The separator is '/'.",
        "whyZh": "02d 把 8 补成两位。字符串 '8' 重复得到 '88'，整数乘法得到 24。print 以 / 分隔三项。"
      },
      {
        "kind": "trace",
        "ref": "1.3",
        "title": "A range of slots",
        "titleZh": "一组格位",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "slots = tuple(range(9, 1, -3))\nprint(slots, slots[-1:])",
        "answer": "(9, 6, 3) (3,)",
        "why": "The range visits 9, 6 and 3. Slicing from the final index returns a one-element tuple, whose representation includes a comma.",
        "whyZh": "range 依次取 9、6、3。从最后一个索引切片得到单元素元组，显示时必须带逗号。"
      },
      {
        "kind": "trace",
        "ref": "1.4",
        "title": "Two switch positions",
        "titleZh": "两个开关状态",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "a, b = 2, 5\na, b = b - a, a + b\nprint(a == 3 < b, a + b)",
        "answer": "True 10",
        "why": "Both right-hand expressions use the old values, giving a=3 and b=7. The two comparisons in the chain both hold, and the sum is 10.",
        "whyZh": "右侧同时使用旧值，得到 a=3、b=7。链式比较的两部分均成立，和为 10。"
      },
      {
        "kind": "trace",
        "ref": "1.5",
        "title": "Replacement labels",
        "titleZh": "替换标签",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "items = [\"port\", \"spare\", \"aft\"]\nsaved = items\nitems = items[1:]\nitems[0] = \"bow\"\nprint(saved[1], items)",
        "answer": "spare ['bow', 'aft']",
        "why": "saved still names the original three-item list. Slicing creates a new outer list, so replacing its first item leaves saved[1] as 'spare'.",
        "whyZh": "saved 仍指向原来的三元素列表。切片产生新列表，替换新列表首项不会改变 saved[1]。"
      },
      {
        "kind": "trace",
        "ref": "1.6",
        "title": "An instrument roster",
        "titleZh": "仪器名册",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "tow = [\"A\", \"B\"]\nrows = [tow] * 2\nrows[0].append(\"C\")\nrows[1] = rows[1][1:]\nprint(rows)",
        "answer": "[['A', 'B', 'C'], ['B', 'C']]",
        "why": "Both slots initially reference tow, so append extends the shared list. The final assignment replaces only slot 1 with the slice ['B', 'C'].",
        "whyZh": "两个位置原先共用 tow，append 会修改共享列表。最后的赋值只把位置 1 换成切片 ['B', 'C']。"
      },
      {
        "kind": "trace",
        "ref": "1.7",
        "title": "Counter display",
        "titleZh": "计数器显示",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "tally = {}\nfor letter in \"cable\":\n    k = letter in \"ae\"\n    tally[k] = tally.get(k, 0) + 1\nprint(list(tally.items()))",
        "answer": "[(False, 3), (True, 2)]",
        "why": "The key False first appears for c, then True for a. Later updates keep this insertion order. The consonants c, b, l give 3 and the vowels a, e give 2.",
        "whyZh": "c 首先建立 False 键，a 随后建立 True 键。更新值保留键的插入顺序。三个辅音和两个元音分别计入两个键。"
      },
      {
        "kind": "trace",
        "ref": "1.8",
        "title": "A text marker",
        "titleZh": "文本标记",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "s = \"><CAB<>AB<\"\nt = s.strip(\"<>\")\nprint(t.lower().replace(\"ab\", \"X\", 1))",
        "answer": "cX<>ab",
        "why": "strip removes either bracket character at the two ends, leaving CAB<>AB. After lowercasing, only the first 'ab' is replaced.",
        "whyZh": "strip 从两端逐个移除尖括号字符，留下 CAB<>AB。转为小写后只替换首次出现的 ab。"
      },
      {
        "kind": "trace",
        "ref": "1.9",
        "title": "Inspection rounds",
        "titleZh": "巡检轮次",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "record = []\nfor step in (2, 3):\n    pos = 1\n    while pos < 6:\n        record.append(pos)\n        pos += step\nprint(record)",
        "answer": "[1, 3, 5, 1, 4]",
        "why": "The first inner loop logs 1, 3, 5. The next round resets pos to 1 and advances by 3, logging 1, 4 before reaching 7.",
        "whyZh": "第一轮内循环记录 1、3、5。第二轮把 pos 重置为 1，步长改为 3，记录 1、4 后到达 7。"
      },
      {
        "kind": "trace",
        "ref": "1.10",
        "title": "Reading a calibration",
        "titleZh": "读取校准值",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "def shift(x, offset=2):\n    return x - offset\n\ndef read(n):\n    n = shift(n)\n    return shift(n * 2, n // 2)\n\nprint(read(8))",
        "answer": "9",
        "why": "The inner assignment changes n from 8 to 6. The return statement calls shift(12, 3), which subtracts the explicit offset and returns 9.",
        "whyZh": "第一次调用使用默认偏移量，使 n 从 8 变为 6。返回语句调用 shift(12, 3)，因此结果为 9。"
      },
      {
        "kind": "trace",
        "ref": "1.11",
        "title": "Insert a sample",
        "titleZh": "插入采样值",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "a = [1, 4, 6, 3]\nj = 3\nkey = a[j]\nwhile j > 0 and a[j - 1] > key:\n    a[j] = a[j - 1]\n    j -= 1\na[j] = key\nprint(j, a)",
        "answer": "1 [1, 3, 4, 6]",
        "why": "The saved key is 3. Moving 6 and 4 one position right brings j down to 1. The value 1 stops the loop, so 3 goes into index 1.",
        "whyZh": "暂存值为 3。把 6 和 4 向右移后 j 降至 1。遇到 1 时循环停止，于是 3 写入索引 1。"
      },
      {
        "kind": "trace",
        "ref": "1.12",
        "title": "The descending trace",
        "titleZh": "下降调用的记录",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "def log(n, seen):\n    seen.append(n)\n    if n > 1:\n        log(n - 2, seen)\n        seen.append(-n)\n    return len(seen)\n\nseen = []\nprint(log(5, seen), seen)",
        "answer": "5 [5, 3, 1, -3, -5]",
        "why": "The three calls append 5, 3 and 1 to the same list. The base call ends there. The waiting calls append −3 then −5 as they return, leaving five entries.",
        "whyZh": "三个调用在同一列表追加 5、3、1。基础调用直接返回，外层调用依次再追加 −3、−5，最终共五项。"
      },
      {
        "kind": "trace",
        "ref": "1.13",
        "title": "Matching stations",
        "titleZh": "匹配站名",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "stations = \"radar\"\nids = [i for i, a in enumerate(stations) if a in stations[:i]]\nprint(ids, \"\".join(stations[i] for i in ids))",
        "answer": "[3, 4] ar",
        "why": "At indices 0–2 each letter is new. At index 3 'a' already occurs in the prefix, as does 'r' at index 4. Reading just those positions gives 'ar'.",
        "whyZh": "索引 0 至 2 的字符此前未出现。索引 3 的 a 和索引 4 的 r 在各自前缀中出现过，取出这两项得到 ar。"
      },
      {
        "kind": "trace",
        "ref": "1.14",
        "title": "Stopping at a blocked cell",
        "titleZh": "遇到障碍格停止",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "cells = []\nfor row in range(3):\n    for col in range(3):\n        if row + col == 3:\n            break\n        if row != col:\n            cells.append(10 * row + col)\nprint(cells)",
        "answer": "[1, 2, 10, 20]",
        "why": "Row 0 contributes 1 and 2. Row 1 contributes 10, skips its diagonal, then breaks at col=2. Row 2 contributes 20 and breaks at col=1. Each break exits only the inner loop.",
        "whyZh": "第 0 行加入 1、2；第 1 行加入 10，跳过对角线，在 col=2 停止。第 2 行加入 20，在 col=1 停止。break 只退出内循环。"
      },
      {
        "kind": "code",
        "ref": "2(a)",
        "title": "Read the manifest",
        "titleZh": "读取包裹清单",
        "en": "Implement parse_manifest(lines). Each nonblank line has the form code:mass. Strip surrounding whitespace from both fields, convert the code to uppercase and the positive integer mass to int. Ignore blank lines. Return a list of [code, mass] rows in input order. Codes are unique after normalization.",
        "zh": "实现 parse_manifest(lines)。非空行格式为 code:mass。去掉两字段两端空白，将编号转为大写、质量转为正整数，忽略空白行。按输入顺序返回由 [编号, 质量] 组成的列表，规范化后的编号互不相同。",
        "starter": "def parse_manifest(lines):\n    pass\n",
        "solution": "def parse_manifest(lines):\n    rows = []\n    for line in lines:\n        if line.strip():\n            code, mass = line.split(':')\n            rows.append([code.strip().upper(), int(mass)])\n    return rows\n",
        "driver": "import json\nargs = json.loads(input())\nprint(repr(parse_manifest(*args)))\n",
        "why": "Test for a blank line before splitting it. Converting the numeric field to int removes leading zeros.",
        "whyZh": "先跳过空行再拆分。用 int 转换数字会自动去掉前导零。",
        "tests": [
          {
            "input": "[[\" bx : 04\", \"Y:7\"]]\n",
            "output": "[['BX', 4], ['Y', 7]]",
            "call": "parse_manifest([' bx : 04', 'Y:7'])",
            "why": "BX is uppercased and 04 becomes the integer 4.",
            "whyZh": "bx 转为 BX，04 转为整数 4。"
          },
          {
            "input": "[[]]\n",
            "output": "[]",
            "call": "parse_manifest([])",
            "why": "An empty manifest contributes no rows.",
            "whyZh": "空清单没有条目。"
          },
          {
            "input": "[[\"  \", \"A:1\", \"\"]]\n",
            "output": "[['A', 1]]",
            "call": "parse_manifest(['  ', 'A:1', ''])",
            "why": "Both surrounding blank lines are skipped.",
            "whyZh": "前后两条空白行均跳过。"
          },
          {
            "input": "[[\"z9:12\", \" k : 3\"]]\n",
            "output": "[['Z9', 12], ['K', 3]]",
            "call": "parse_manifest(['z9:12', ' k : 3'])",
            "why": "The code Z9 retains its digit and appears before K.",
            "whyZh": "Z9 保留数字并排在 K 之前。"
          }
        ]
      },
      {
        "kind": "code",
        "ref": "2(b)",
        "title": "Choose a parcel",
        "titleZh": "选择包裹",
        "en": "Implement pick_parcel(rows, space, used). Each row is [unique_code, positive_mass]. Return the code of the heaviest unused parcel whose mass is at most space. Keep the earliest row on equal mass. used is a list of codes, and space is nonnegative. Return None if nothing fits.",
        "zh": "实现 pick_parcel(rows, space, used)。每行是 [唯一编号, 正整数质量]。返回未使用且质量不超过非负余量 space 的最重包裹编号。质量相同时选靠前的一行。used 是已使用编号的列表。没有可选包裹时返回 None。",
        "starter": "def pick_parcel(rows, space, used):\n    pass\n",
        "solution": "def pick_parcel(rows, space, used):\n    winner, mass = None, -1\n    for code, weight in rows:\n        if code not in used and mass < weight <= space:\n            winner, mass = code, weight\n    return winner\n",
        "driver": "import json\nargs = json.loads(input())\nprint(repr(pick_parcel(*args)))\n",
        "why": "Apply the capacity and used-code filters before comparing masses. Update only on a strictly heavier candidate.",
        "whyZh": "先检查容量和已用编号，再比较质量。只有严格更重时才替换当前候选。",
        "tests": [
          {
            "input": "[[[\"A\", 4], [\"B\", 6], [\"C\", 6], [\"D\", 2]], 6, []]\n",
            "output": "'B'",
            "call": "pick_parcel([['A', 4], ['B', 6], ['C', 6], ['D', 2]], 6, [])",
            "why": "B and C both weigh 6; the earlier row is B.",
            "whyZh": "B 与 C 均重 6，B 更靠前。"
          },
          {
            "input": "[[[\"A\", 4], [\"B\", 6], [\"C\", 6], [\"D\", 2]], 6, [\"B\"]]\n",
            "output": "'C'",
            "call": "pick_parcel([['A', 4], ['B', 6], ['C', 6], ['D', 2]], 6, ['B'])",
            "why": "B is used, so C is the heaviest available exact fit.",
            "whyZh": "B 已使用，C 是余下恰好能装下的最重包裹。"
          },
          {
            "input": "[[[\"A\", 4], [\"B\", 6], [\"C\", 6], [\"D\", 2]], 1, []]\n",
            "output": "None",
            "call": "pick_parcel([['A', 4], ['B', 6], ['C', 6], ['D', 2]], 1, [])",
            "why": "Even D weighs 2, above the available 1.",
            "whyZh": "最轻的 D 也重 2，超过余量 1。"
          },
          {
            "input": "[[[\"X\", 8], [\"Y\", 3]], 4, [\"X\"]]\n",
            "output": "'Y'",
            "call": "pick_parcel([['X', 8], ['Y', 3]], 4, ['X'])",
            "why": "Y fits even though its mass is below the capacity.",
            "whyZh": "Y 的质量小于余量，仍然可以装入。"
          }
        ]
      },
      {
        "kind": "code",
        "ref": "2(c)",
        "title": "Load one cart",
        "titleZh": "装满一辆手推车",
        "en": "Implement cart_order(rows, capacity). Starting with an empty cart, repeatedly take the heaviest remaining parcel that fits the remaining capacity. Break ties by original row order. Deduct its mass and use it only once. Return the list of codes taken. Rows are [unique_code, positive_mass]; capacity is nonnegative. Implement this function independently.",
        "zh": "实现 cart_order(rows, capacity)。从空车开始，每次在未装包裹中选余量能容纳的最重者，质量相同选原表较靠前者。扣除质量，每件只用一次。返回实际装入的编号顺序。行格式为 [唯一编号, 正整数质量]，容量非负。独立实现本函数。",
        "starter": "def cart_order(rows, capacity):\n    pass\n",
        "solution": "def cart_order(rows, capacity):\n    remaining = rows[:]\n    result = []\n    while remaining:\n        candidates = [i for i, pair in enumerate(remaining) if pair[1] <= capacity]\n        if not candidates:\n            break\n        i = max(candidates, key=lambda j: remaining[j][1])\n        code, weight = remaining.pop(i)\n        result.append(code)\n        capacity -= weight\n    return result\n",
        "driver": "import json\nargs = json.loads(input())\nprint(repr(cart_order(*args)))\n",
        "why": "Recompute the choice after every deduction. The greedy rule may leave spare capacity even if another combination would fill the cart.",
        "whyZh": "每装一件都要按新余量重新选择。贪心选择可能留下空余，即使另有组合能装满。",
        "tests": [
          {
            "input": "[[[\"A\", 4], [\"B\", 6], [\"C\", 6], [\"D\", 2]], 10]\n",
            "output": "['B', 'A']",
            "call": "cart_order([['A', 4], ['B', 6], ['C', 6], ['D', 2]], 10)",
            "why": "Take B (6), then A (4) exactly fills the remaining 4.",
            "whyZh": "先取 B（6），A（4）恰好填满剩余的 4。"
          },
          {
            "input": "[[[\"A\", 4], [\"B\", 6], [\"C\", 6], [\"D\", 2]], 14]\n",
            "output": "['B', 'C', 'D']",
            "call": "cart_order([['A', 4], ['B', 6], ['C', 6], ['D', 2]], 14)",
            "why": "After the tied sixes, only D fits the last 2.",
            "whyZh": "依次取两个重 6 的包裹后，最后 2 个单位只能装 D。"
          },
          {
            "input": "[[[\"A\", 4], [\"B\", 6], [\"C\", 6], [\"D\", 2]], 0]\n",
            "output": "[]",
            "call": "cart_order([['A', 4], ['B', 6], ['C', 6], ['D', 2]], 0)",
            "why": "Every mass is positive, so capacity zero stops immediately.",
            "whyZh": "质量均为正，容量为零时立即结束。"
          },
          {
            "input": "[[[\"P\", 7], [\"Q\", 5], [\"R\", 5]], 10]\n",
            "output": "['P']",
            "call": "cart_order([['P', 7], ['Q', 5], ['R', 5]], 10)",
            "why": "Greedy loading picks 7 first, leaving 3; the two fives are never chosen.",
            "whyZh": "先按贪心规则取 7，剩 3，因此两个重 5 的包裹都无法装入。"
          }
        ]
      },
      {
        "kind": "code",
        "ref": "2(d)",
        "title": "Book a pair",
        "titleZh": "预订两个包裹位",
        "en": "Implement best_pair(rows, limit). A booking must contain exactly two different rows, each [unique_code, positive_mass]. Maximize their total mass without exceeding limit. For a tie choose the smallest index pair (i, j) in lexicographic order with i < j. Return their two codes in that order, or None.",
        "zh": "实现 best_pair(rows, limit)。必须选两行不同的包裹，每行是 [唯一编号, 正整数质量]。在总质量不超过 limit 的前提下取最大总质量。并列时取字典序最小的下标对 (i, j)，其中 i < j。按此顺序返回两个编号的列表，无可行配对返回 None。",
        "starter": "def best_pair(rows, limit):\n    pass\n",
        "solution": "def best_pair(rows, limit):\n    best, mass = None, -1\n    for i in range(len(rows)):\n        for j in range(i+1, len(rows)):\n            total = rows[i][1] + rows[j][1]\n            if mass < total <= limit:\n                mass = total\n                best = [rows[i][0], rows[j][0]]\n    return best\n",
        "driver": "import json\nargs = json.loads(input())\nprint(repr(best_pair(*args)))\n",
        "why": "Enumerate index pairs with j greater than i. Replacing the best only for an improvement resolves ties in index order.",
        "whyZh": "只枚举 j > i 的下标对。仅在总质量更大时更新，便能保持规定的并列顺序。",
        "tests": [
          {
            "input": "[[[\"A\", 4], [\"B\", 6], [\"C\", 6], [\"D\", 2]], 10]\n",
            "output": "['A', 'B']",
            "call": "best_pair([['A', 4], ['B', 6], ['C', 6], ['D', 2]], 10)",
            "why": "A+B and A+C total 10; (0,1) precedes (0,2).",
            "whyZh": "A+B 和 A+C 都重 10；(0,1) 比 (0,2) 靠前。"
          },
          {
            "input": "[[[\"A\", 4], [\"B\", 6], [\"C\", 6], [\"D\", 2]], 12]\n",
            "output": "['B', 'C']",
            "call": "best_pair([['A', 4], ['B', 6], ['C', 6], ['D', 2]], 12)",
            "why": "The two sixes give the unique total of 12.",
            "whyZh": "两个重 6 的包裹给出唯一的总质量 12。"
          },
          {
            "input": "[[[\"X\", 1]], 8]\n",
            "output": "None",
            "call": "best_pair([['X', 1]], 8)",
            "why": "A single row cannot be paired with itself.",
            "whyZh": "一行不能和自己配对。"
          },
          {
            "input": "[[[\"A\", 4], [\"B\", 6], [\"C\", 6], [\"D\", 2]], 5]\n",
            "output": "None",
            "call": "best_pair([['A', 4], ['B', 6], ['C', 6], ['D', 2]], 5)",
            "why": "The lightest distinct pair weighs 2+4=6, over the limit.",
            "whyZh": "最轻的两件为 2+4=6，超过上限。"
          }
        ]
      },
      {
        "kind": "code",
        "ref": "3",
        "title": "Shuffled twins",
        "titleZh": "重排双胞串",
        "en": "Implement shuffled_twins(s) for a string of 0 to 80 lowercase letters. Find a contiguous substring of even length whose halves are different strings containing exactly the same letters with the same multiplicities. Return the longest qualifying substring. On a tie return the one with the smallest starting index. Return None when none qualifies.",
        "zh": "实现 shuffled_twins(s)，s 由 0 至 80 个小写字母组成。寻找偶数长度的连续子串，要求两半字符串不同，但每种字母出现次数完全相同。返回最长合格子串；长度并列取起点下标最小者。无解返回 None。",
        "starter": "def shuffled_twins(s):\n    pass\n",
        "solution": "def shuffled_twins(s):\n    for width in range(len(s) // 2 * 2, 1, -2):\n        for i in range(len(s) - width + 1):\n            a = s[i:i+width//2]\n            b = s[i+width//2:i+width]\n            if a != b and sorted(a) == sorted(b):\n                return a+b\n    return None\n",
        "driver": "import json\nargs = json.loads(input())\nprint(repr(shuffled_twins(*args)))\n",
        "why": "Check even lengths from longest to shortest and starts from left to right. Equal sets alone do not establish equal character counts.",
        "whyZh": "从长到短检查偶数长度，同一长度从左到右枚举起点。只比较字母集合无法验证重复次数。",
        "tests": [
          {
            "input": "[\"\"]\n",
            "output": "None",
            "call": "shuffled_twins('')",
            "why": "No pair of adjacent equal-length halves in '' is a rearrangement with different order.",
            "whyZh": "'' 中没有两段等长相邻半串能同时满足字母计数相同且排列不同。"
          },
          {
            "input": "[\"a\"]\n",
            "output": "None",
            "call": "shuffled_twins('a')",
            "why": "No pair of adjacent equal-length halves in 'a' is a rearrangement with different order.",
            "whyZh": "'a' 中没有两段等长相邻半串能同时满足字母计数相同且排列不同。"
          },
          {
            "input": "[\"aa\"]\n",
            "output": "None",
            "call": "shuffled_twins('aa')",
            "why": "No pair of adjacent equal-length halves in 'aa' is a rearrangement with different order.",
            "whyZh": "'aa' 中没有两段等长相邻半串能同时满足字母计数相同且排列不同。"
          },
          {
            "input": "[\"ab\"]\n",
            "output": "None",
            "call": "shuffled_twins('ab')",
            "why": "No pair of adjacent equal-length halves in 'ab' is a rearrangement with different order.",
            "whyZh": "'ab' 中没有两段等长相邻半串能同时满足字母计数相同且排列不同。"
          },
          {
            "input": "[\"abba\"]\n",
            "output": "'abba'",
            "call": "shuffled_twins('abba')",
            "why": "At index 0, 'ab' and 'ba' both sort to 'ab'. This is the first longest qualifying window.",
            "whyZh": "下标 0 处的 'ab' 与 'ba' 排序后均为 'ab'。这是最靠前的最长合格窗口。"
          },
          {
            "input": "[\"aabb\"]\n",
            "output": "None",
            "call": "shuffled_twins('aabb')",
            "why": "No pair of adjacent equal-length halves in 'aabb' is a rearrangement with different order.",
            "whyZh": "'aabb' 中没有两段等长相邻半串能同时满足字母计数相同且排列不同。"
          },
          {
            "input": "[\"abccba\"]\n",
            "output": "'abccba'",
            "call": "shuffled_twins('abccba')",
            "why": "At index 0, 'abc' and 'cba' both sort to 'abc'. This is the first longest qualifying window.",
            "whyZh": "下标 0 处的 'abc' 与 'cba' 排序后均为 'abc'。这是最靠前的最长合格窗口。"
          },
          {
            "input": "[\"xabccbay\"]\n",
            "output": "'abccba'",
            "call": "shuffled_twins('xabccbay')",
            "why": "At index 1, 'abc' and 'cba' both sort to 'abc'. This is the first longest qualifying window.",
            "whyZh": "下标 1 处的 'abc' 与 'cba' 排序后均为 'abc'。这是最靠前的最长合格窗口。"
          },
          {
            "input": "[\"ababbaba\"]\n",
            "output": "'ababbaba'",
            "call": "shuffled_twins('ababbaba')",
            "why": "At index 0, 'abab' and 'baba' both sort to 'aabb'. This is the first longest qualifying window.",
            "whyZh": "下标 0 处的 'abab' 与 'baba' 排序后均为 'aabb'。这是最靠前的最长合格窗口。"
          },
          {
            "input": "[\"aababa\"]\n",
            "output": "'aababa'",
            "call": "shuffled_twins('aababa')",
            "why": "At index 0, 'aab' and 'aba' both sort to 'aab'. This is the first longest qualifying window.",
            "whyZh": "下标 0 处的 'aab' 与 'aba' 排序后均为 'aab'。这是最靠前的最长合格窗口。"
          },
          {
            "input": "[\"abab\"]\n",
            "output": "None",
            "call": "shuffled_twins('abab')",
            "why": "No pair of adjacent equal-length halves in 'abab' is a rearrangement with different order.",
            "whyZh": "'abab' 中没有两段等长相邻半串能同时满足字母计数相同且排列不同。"
          },
          {
            "input": "[\"abcabc\"]\n",
            "output": "None",
            "call": "shuffled_twins('abcabc')",
            "why": "No pair of adjacent equal-length halves in 'abcabc' is a rearrangement with different order.",
            "whyZh": "'abcabc' 中没有两段等长相邻半串能同时满足字母计数相同且排列不同。"
          },
          {
            "input": "[\"abbaa\"]\n",
            "output": "'abba'",
            "call": "shuffled_twins('abbaa')",
            "why": "At index 0, 'ab' and 'ba' both sort to 'ab'. This is the first longest qualifying window.",
            "whyZh": "下标 0 处的 'ab' 与 'ba' 排序后均为 'ab'。这是最靠前的最长合格窗口。"
          }
        ]
      }
    ]
  },
  {
    "id": "2",
    "theme": "Reading-room loans",
    "themeZh": "阅览室借阅",
    "questions": [
      {
        "kind": "trace",
        "ref": "1.1",
        "title": "A signed power",
        "titleZh": "带符号的幂",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "p = -3 ** 2\nq = (-3) ** 2\nprint(p + q, p % 5)",
        "answer": "0 1",
        "why": "Exponentiation gives p = −9, whereas squaring the parenthesised −3 gives q = 9. Their sum is zero. Dividing −9 by 5 with floor quotient −2 leaves remainder 1.",
        "whyZh": "幂运算先进行，所以 p=−9；带括号的 −3 平方后 q=9。和为 0。−9 除以 5 的向下取整商为 −2，余数为 1。"
      },
      {
        "kind": "trace",
        "ref": "1.2",
        "title": "Gate status",
        "titleZh": "闸门状态",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "x = \"\"\ny = \"open\"\nprint((x or y)[:2], bool(x and y), len(y) > 4)",
        "answer": "op False False",
        "why": "The empty string is false, so x or y produces 'open' and its first two letters are 'op'. x and y returns the empty string. The length of y is exactly 4.",
        "whyZh": "空字符串为假，x or y 取到 'open'，其前两个字符为 op。x and y 返回空字符串。y 的长度恰好为 4。"
      },
      {
        "kind": "trace",
        "ref": "1.3",
        "title": "A centred measurement",
        "titleZh": "居中的测量标签",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "v = 3.125\nprint(f\"[{v:.1f}]\".center(9, \".\"), int(v * 2))",
        "answer": "..[3.1].. 6",
        "why": "Formatting to one decimal produces [3.1], five characters. Centering to width nine adds two dots at each end. int(6.25) truncates to 6.",
        "whyZh": "保留一位小数得到五字符文本 [3.1]。居中到九个字符，两端各补两个点。int(6.25) 截去小数得到 6。"
      },
      {
        "kind": "trace",
        "ref": "1.4",
        "title": "Alternating platforms",
        "titleZh": "交替站台",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "name = \"STATION\"\nprint(name[-2:0:-2], name[::3])",
        "answer": "OTT STN",
        "why": "The negative-step slice visits indices 5, 3 and 1, spelling OTT. The forward slice visits 0, 3 and 6, spelling STN.",
        "whyZh": "负步长切片依次访问索引 5、3、1，得到 OTT。正向切片访问 0、3、6，得到 STN。"
      },
      {
        "kind": "trace",
        "ref": "1.5",
        "title": "A replacement row",
        "titleZh": "替换一行",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "grid = [[1], [2]]\ncopy = grid[:]\ncopy[0] += [3]\ncopy[1] = [4]\nprint(grid, copy)",
        "answer": "[[1, 3], [2]] [[1, 3], [4]]",
        "why": "The slice copies only the outer list. += extends the shared first inner list. Assigning [4] replaces the second slot only in copy.",
        "whyZh": "切片只复制外层列表。+= 原地扩展共享的第一个内层列表。把 [4] 赋给第二个位置只影响 copy。"
      },
      {
        "kind": "trace",
        "ref": "1.6",
        "title": "Arriving twice",
        "titleZh": "重复到站",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "seen = set()\nlog = []\nfor x in (3, 2, 3, 1, 2):\n    if x in seen:\n        log.append(len(seen))\n    seen.add(x)\nprint(log, sorted(seen))",
        "answer": "[2, 3] [1, 2, 3]",
        "why": "At the second 3 the set contains 3 and 2. At the second 2 it contains all three distinct numbers. The log records sizes before each addition.",
        "whyZh": "第二个 3 到来时集合已有 3、2；第二个 2 到来时三个不同数字均已出现。日志记录每次加入前的集合大小。"
      },
      {
        "kind": "trace",
        "ref": "1.7",
        "title": "Bag labels",
        "titleZh": "袋子标签",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "bags = {\"P\": 2, \"Q\": 4}\nn = bags.pop(\"P\")\nbags[\"P\"] = n + 1\nprint(list(bags), sum(bags.values()))",
        "answer": "['Q', 'P'] 7",
        "why": "Removing P leaves Q as the first key. Reinserting P places it at the end with value 3. The values 4 and 3 sum to 7.",
        "whyZh": "删除 P 后，Q 成为第一个键。重新插入 P 会排在末尾，其值为 3。4 与 3 的和为 7。"
      },
      {
        "kind": "trace",
        "ref": "1.8",
        "title": "Two separators",
        "titleZh": "两种分隔效果",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "parts = \"L--R---S\".split(\"--\")\nprint(parts, \"/\".join(parts))",
        "answer": "['L', 'R', '-S'] L/R/-S",
        "why": "split consumes each non-overlapping pair of hyphens. In the run of three it consumes two and leaves one attached to S. Joining the three resulting parts inserts slashes.",
        "whyZh": "split 每次消耗两个不重叠的连字符。三个连续连字符只消耗前两个，剩下的一个留在 S 前。join 用斜杠连接三个部分。"
      },
      {
        "kind": "trace",
        "ref": "1.9",
        "title": "Skip one station",
        "titleZh": "跳过一个站点",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "i, total = 8, 0\nwhile i > 1:\n    i -= 2\n    if i == 4:\n        continue\n    total += i\nprint(i, total)",
        "answer": "0 8",
        "why": "The values after subtraction are 6, 4, 2 and 0. continue skips only the addition of 4. The loop finishes with i=0 and total=6+2+0.",
        "whyZh": "减法后的 i 依次为 6、4、2、0。continue 只跳过加 4 这一步。循环结束时 i=0，总和为 6+2+0。"
      },
      {
        "kind": "trace",
        "ref": "1.10",
        "title": "A shared notebook",
        "titleZh": "共用记录本",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "def stamp(x, book=[]):\n    book.append(x)\n    return len(book)\n\nprint(stamp(2), stamp(2, []), stamp(5))",
        "answer": "1 1 2",
        "why": "The first call writes to the default list. The second receives a new explicit list. The third reuses the original default list, which then contains [2, 5].",
        "whyZh": "第一次调用写入默认列表。第二次显式传入一个新列表。第三次复用原默认列表，内容变成 [2, 5]。"
      },
      {
        "kind": "trace",
        "ref": "1.11",
        "title": "Search window",
        "titleZh": "查找窗口",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "a = [1, 4, 4, 7, 9]\nlo, hi = 0, len(a)\nwhile lo < hi:\n    m = (lo + hi) // 2\n    if a[m] < 4:\n        lo = m + 1\n    else:\n        hi = m\nprint(lo, hi)",
        "answer": "1 1",
        "why": "The midpoint indices are 2, 1 and 0. Equality moves hi down to 2 and then 1. The value 1 at index 0 moves lo to 1, where the bounds meet.",
        "whyZh": "中点索引依次为 2、1、0。等于 4 时 hi 先降至 2 再降至 1。索引 0 的值为 1，使 lo 升至 1，两端相遇。"
      },
      {
        "kind": "trace",
        "ref": "1.12",
        "title": "Tokens on the way back",
        "titleZh": "返回时拼接标记",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "def path(n):\n    if n < 2:\n        return str(n)\n    return path(n // 2) + str(n % 2)\n\nprint(path(13), path(4))",
        "answer": "1101 100",
        "why": "The chain for 13 is 13→6→3→1. Returning appends the remainders for 3, 6, 13 (1, 0, 1) after the base '1'. For 4 both appended remainders are 0.",
        "whyZh": "13 的调用链为 13→6→3→1。返回时在基础值 '1' 后依次追加 3、6、13 的余数 1、0、1。4 的链在 '1' 后追加两个 0。"
      },
      {
        "kind": "trace",
        "ref": "1.13",
        "title": "A stencil of sums",
        "titleZh": "成对求和",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "nums = [2, 3, 5]\npairs = [(a, b) for a in nums for b in nums if a < b and (a+b) % 2]\nprint(pairs)",
        "answer": "[(2, 3), (2, 5)]",
        "why": "The strict inequality keeps the pairs (2,3), (2,5), (3,5). Only the first two have odd sums, so their remainders are truthy.",
        "whyZh": "严格小于条件保留 (2,3)、(2,5)、(3,5)。前两对之和为奇数，除以 2 的余数为真。"
      },
      {
        "kind": "trace",
        "ref": "1.14",
        "title": "Page groups",
        "titleZh": "分页组",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "groups = []\nfor size in [1, 3, 2]:\n    row = []\n    for number in range(1, size + 1):\n        if number % 2:\n            row.insert(0, number)\n    groups.append(row)\nprint(groups)",
        "answer": "[[1], [3, 1], [1]]",
        "why": "A fresh row is created for each size. Only odd numbers enter, each at index 0. The size-3 row therefore holds 3 before 1, while the other rows contain only 1.",
        "whyZh": "每种长度都创建新行，只把奇数插到开头。长度为 3 的行把 3 放在 1 前，另外两行各只有 1。"
      },
      {
        "kind": "code",
        "ref": "2(a)",
        "title": "Index the titles",
        "titleZh": "建立书名索引",
        "en": "Implement title_index(events). Each event is [action, reader, title], with action OUT or IN. An OUT is valid only for an available book. An IN is valid only for its current holder. All books start available. Names and titles are case-sensitive. Return the distinct titles mentioned, ordered by first appearance, including titles in invalid events.",
        "zh": "实现 title_index(events)。每条事件格式为 [操作, 读者, 书名]，操作是 OUT 或 IN。仅在书可借时 OUT 有效，仅由当前借阅者执行的 IN 有效。所有书起初均可借，读者及书名区分大小写。 按首次出现的顺序返回所有不同书名，无效事件中的书名也算。",
        "starter": "def title_index(events):\n    pass\n",
        "solution": "def title_index(events):\n    titles = []\n    for action, reader, title in events:\n        if title not in titles:\n            titles.append(title)\n    return titles\n",
        "driver": "import json\nargs = json.loads(input())\nprint(repr(title_index(*args)))\n",
        "why": "Read the title field on every event. Keep the first occurrence of each spelling.",
        "whyZh": "检查每条事件的书名字段，每种拼写只保留第一次。",
        "tests": [
          {
            "input": "[[[\"OUT\", \"Ann\", \"Sky\"], [\"OUT\", \"Bo\", \"Sky\"], [\"OUT\", \"Ann\", \"Sea\"], [\"IN\", \"Bo\", \"Sea\"], [\"IN\", \"Ann\", \"Sky\"], [\"OUT\", \"Bo\", \"Sky\"]]]\n",
            "output": "['Sky', 'Sea']",
            "call": "title_index([['OUT', 'Ann', 'Sky'], ['OUT', 'Bo', 'Sky'], ['OUT', 'Ann', 'Sea'], ['IN', 'Bo', 'Sea'], ['IN', 'Ann', 'Sky'], ['OUT', 'Bo', 'Sky']])",
            "why": "Sky first appears in event 0, Sea in event 2.",
            "whyZh": "Sky 首见于事件 0，Sea 首见于事件 2。"
          },
          {
            "input": "[[]]\n",
            "output": "[]",
            "call": "title_index([])",
            "why": "There are no titles to index.",
            "whyZh": "没有事件，索引为空。"
          },
          {
            "input": "[[[\"IN\", \"Mo\", \"Ink\"]]]\n",
            "output": "['Ink']",
            "call": "title_index([['IN', 'Mo', 'Ink']])",
            "why": "The invalid return still mentions Ink.",
            "whyZh": "尽管归还无效，事件中仍提到 Ink。"
          },
          {
            "input": "[[[\"OUT\", \"A\", \"a\"], [\"OUT\", \"B\", \"A\"]]]\n",
            "output": "['a', 'A']",
            "call": "title_index([['OUT', 'A', 'a'], ['OUT', 'B', 'A']])",
            "why": "The two titles differ in case.",
            "whyZh": "两个书名的大小写不同。"
          }
        ]
      },
      {
        "kind": "code",
        "ref": "2(b)",
        "title": "Find the current holder",
        "titleZh": "查找当前借阅者",
        "en": "Implement holder(events, target). Each event is [action, reader, title], with action OUT or IN. An OUT is valid only for an available book. An IN is valid only for its current holder. All books start available. Names and titles are case-sensitive. Ignore invalid events. Return the holder of target after the full log, or None if available or never mentioned.",
        "zh": "实现 holder(events, target)。每条事件格式为 [操作, 读者, 书名]，操作是 OUT 或 IN。仅在书可借时 OUT 有效，仅由当前借阅者执行的 IN 有效。所有书起初均可借，读者及书名区分大小写。 忽略无效事件。返回全部事件处理结束后 target 的借阅者；可借或未出现均返回 None。",
        "starter": "def holder(events, target):\n    pass\n",
        "solution": "def holder(events, target):\n    current = None\n    for action, reader, title in events:\n        if title == target:\n            if action == 'OUT' and current is None:\n                current = reader\n            elif action == 'IN' and current == reader:\n                current = None\n    return current\n",
        "driver": "import json\nargs = json.loads(input())\nprint(repr(holder(*args)))\n",
        "why": "Track a single title. Copy the reader into the holder only when the title is available; clear it only on a matching return.",
        "whyZh": "只追踪目标书。可借时才记录新借阅者，当前借阅者归还时才清空。",
        "tests": [
          {
            "input": "[[[\"OUT\", \"Ann\", \"Sky\"], [\"OUT\", \"Bo\", \"Sky\"], [\"OUT\", \"Ann\", \"Sea\"], [\"IN\", \"Bo\", \"Sea\"], [\"IN\", \"Ann\", \"Sky\"], [\"OUT\", \"Bo\", \"Sky\"]], \"Sky\"]\n",
            "output": "'Bo'",
            "call": "holder([['OUT', 'Ann', 'Sky'], ['OUT', 'Bo', 'Sky'], ['OUT', 'Ann', 'Sea'], ['IN', 'Bo', 'Sea'], ['IN', 'Ann', 'Sky'], ['OUT', 'Bo', 'Sky']], 'Sky')",
            "why": "Ann eventually returns Sky, so Bo’s final loan succeeds.",
            "whyZh": "Ann 后来归还 Sky，Bo 最后借阅成功。"
          },
          {
            "input": "[[[\"OUT\", \"Ann\", \"Sky\"], [\"OUT\", \"Bo\", \"Sky\"], [\"OUT\", \"Ann\", \"Sea\"], [\"IN\", \"Bo\", \"Sea\"], [\"IN\", \"Ann\", \"Sky\"], [\"OUT\", \"Bo\", \"Sky\"]], \"Sea\"]\n",
            "output": "'Ann'",
            "call": "holder([['OUT', 'Ann', 'Sky'], ['OUT', 'Bo', 'Sky'], ['OUT', 'Ann', 'Sea'], ['IN', 'Bo', 'Sea'], ['IN', 'Ann', 'Sky'], ['OUT', 'Bo', 'Sky']], 'Sea')",
            "why": "Bo cannot return a book held by Ann.",
            "whyZh": "Bo 不能归还 Ann 正在借阅的书。"
          },
          {
            "input": "[[[\"OUT\", \"Ann\", \"Sky\"], [\"OUT\", \"Bo\", \"Sky\"], [\"OUT\", \"Ann\", \"Sea\"], [\"IN\", \"Bo\", \"Sea\"], [\"IN\", \"Ann\", \"Sky\"], [\"OUT\", \"Bo\", \"Sky\"]], \"Ink\"]\n",
            "output": "None",
            "call": "holder([['OUT', 'Ann', 'Sky'], ['OUT', 'Bo', 'Sky'], ['OUT', 'Ann', 'Sea'], ['IN', 'Bo', 'Sea'], ['IN', 'Ann', 'Sky'], ['OUT', 'Bo', 'Sky']], 'Ink')",
            "why": "No event mentions Ink.",
            "whyZh": "没有事件提到 Ink。"
          },
          {
            "input": "[[[\"OUT\", \"A\", \"K\"], [\"IN\", \"A\", \"K\"]], \"K\"]\n",
            "output": "None",
            "call": "holder([['OUT', 'A', 'K'], ['IN', 'A', 'K']], 'K')",
            "why": "The matching return frees K.",
            "whyZh": "借还者相同，K 已可借。"
          }
        ]
      },
      {
        "kind": "code",
        "ref": "2(c)",
        "title": "Audit a loan log",
        "titleZh": "审计借阅记录",
        "en": "Implement first_fault(events). Each event is [action, reader, title], with action OUT or IN. An OUT is valid only for an available book. An IN is valid only for its current holder. All books start available. Names and titles are case-sensitive. Return the zero-based index of the first invalid event, or None if the complete log is valid.",
        "zh": "实现 first_fault(events)。每条事件格式为 [操作, 读者, 书名]，操作是 OUT 或 IN。仅在书可借时 OUT 有效，仅由当前借阅者执行的 IN 有效。所有书起初均可借，读者及书名区分大小写。 返回首个无效事件的下标（从 0 开始）。所有事件均有效时返回 None。",
        "starter": "def first_fault(events):\n    pass\n",
        "solution": "def first_fault(events):\n    owners = {}\n    for i, (action, reader, title) in enumerate(events):\n        if action == 'OUT' and title not in owners:\n            owners[title] = reader\n        elif action == 'IN' and owners.get(title) == reader:\n            del owners[title]\n        else:\n            return i\n    return None\n",
        "driver": "import json\nargs = json.loads(input())\nprint(repr(first_fault(*args)))\n",
        "why": "Keep one holder per borrowed title. The first failed availability or holder check supplies the answer.",
        "whyZh": "按书名维护借阅者。第一次不满足可借条件或归还人身份条件的下标即为答案。",
        "tests": [
          {
            "input": "[[[\"OUT\", \"Ann\", \"Sky\"], [\"OUT\", \"Bo\", \"Sky\"], [\"OUT\", \"Ann\", \"Sea\"], [\"IN\", \"Bo\", \"Sea\"], [\"IN\", \"Ann\", \"Sky\"], [\"OUT\", \"Bo\", \"Sky\"]]]\n",
            "output": "1",
            "call": "first_fault([['OUT', 'Ann', 'Sky'], ['OUT', 'Bo', 'Sky'], ['OUT', 'Ann', 'Sea'], ['IN', 'Bo', 'Sea'], ['IN', 'Ann', 'Sky'], ['OUT', 'Bo', 'Sky']])",
            "why": "Event 1 checks out Sky while Ann still holds it.",
            "whyZh": "事件 1 再借 Sky，此时 Ann 尚未归还。"
          },
          {
            "input": "[[[\"IN\", \"A\", \"K\"]]]\n",
            "output": "0",
            "call": "first_fault([['IN', 'A', 'K']])",
            "why": "Event 0 tries to return an available book.",
            "whyZh": "事件 0 试图归还一本可借的书。"
          },
          {
            "input": "[[[\"OUT\", \"A\", \"K\"], [\"IN\", \"B\", \"K\"]]]\n",
            "output": "1",
            "call": "first_fault([['OUT', 'A', 'K'], ['IN', 'B', 'K']])",
            "why": "B is not the holder at index 1.",
            "whyZh": "下标 1 的归还人 B 不是借阅者。"
          },
          {
            "input": "[[[\"OUT\", \"A\", \"K\"], [\"IN\", \"A\", \"K\"], [\"OUT\", \"B\", \"K\"]]]\n",
            "output": "None",
            "call": "first_fault([['OUT', 'A', 'K'], ['IN', 'A', 'K'], ['OUT', 'B', 'K']])",
            "why": "The book is free when the second reader checks it out.",
            "whyZh": "第二位读者借阅时，该书已归还。"
          }
        ]
      },
      {
        "kind": "code",
        "ref": "2(d)",
        "title": "Peak shelf demand",
        "titleZh": "馆藏借出峰值",
        "en": "Implement peak_loans(events). Each event is [action, reader, title], with action OUT or IN. An OUT is valid only for an available book. An IN is valid only for its current holder. All books start available. Names and titles are case-sensitive. Ignore invalid events. After each event count how many different titles are out. Return [largest_count, first_index_reaching_it]. When the count never exceeds zero, return [0, -1].",
        "zh": "实现 peak_loans(events)。每条事件格式为 [操作, 读者, 书名]，操作是 OUT 或 IN。仅在书可借时 OUT 有效，仅由当前借阅者执行的 IN 有效。所有书起初均可借，读者及书名区分大小写。 忽略无效事件。每次事件后计算已借出的不同书名数，返回 [最大数量, 首次达到峰值的事件下标]。数量从未超过 0 时返回 [0, -1]。",
        "starter": "def peak_loans(events):\n    pass\n",
        "solution": "def peak_loans(events):\n    owners = {}\n    best = [0, -1]\n    for i, (op, who, title) in enumerate(events):\n        if op == 'OUT' and title not in owners:\n            owners[title] = who\n        elif op == 'IN' and owners.get(title) == who:\n            del owners[title]\n        if len(owners) > best[0]:\n            best = [len(owners), i]\n    return best\n",
        "driver": "import json\nargs = json.loads(input())\nprint(repr(peak_loans(*args)))\n",
        "why": "Compare the number of keys after each accepted change. Preserve the earlier index when a later event merely ties the peak.",
        "whyZh": "处理有效变动后比较已借书名数。后来仅追平峰值时保留原下标。",
        "tests": [
          {
            "input": "[[[\"OUT\", \"Ann\", \"Sky\"], [\"OUT\", \"Bo\", \"Sky\"], [\"OUT\", \"Ann\", \"Sea\"], [\"IN\", \"Bo\", \"Sea\"], [\"IN\", \"Ann\", \"Sky\"], [\"OUT\", \"Bo\", \"Sky\"]]]\n",
            "output": "[2, 2]",
            "call": "peak_loans([['OUT', 'Ann', 'Sky'], ['OUT', 'Bo', 'Sky'], ['OUT', 'Ann', 'Sea'], ['IN', 'Bo', 'Sea'], ['IN', 'Ann', 'Sky'], ['OUT', 'Bo', 'Sky']])",
            "why": "Sky and Sea are first simultaneously out at index 2.",
            "whyZh": "下标 2 时 Sky 与 Sea 首次同时被借出。"
          },
          {
            "input": "[[]]\n",
            "output": "[0, -1]",
            "call": "peak_loans([])",
            "why": "The initial state is the only state.",
            "whyZh": "没有事件，只有初始状态。"
          },
          {
            "input": "[[[\"IN\", \"A\", \"K\"]]]\n",
            "output": "[0, -1]",
            "call": "peak_loans([['IN', 'A', 'K']])",
            "why": "The invalid return leaves the count at zero.",
            "whyZh": "无效归还使数量保持为零。"
          },
          {
            "input": "[[[\"OUT\", \"A\", \"K\"], [\"IN\", \"A\", \"K\"], [\"OUT\", \"A\", \"L\"]]]\n",
            "output": "[1, 0]",
            "call": "peak_loans([['OUT', 'A', 'K'], ['IN', 'A', 'K'], ['OUT', 'A', 'L']])",
            "why": "Counts are 1, 0, 1; the first 1 occurs at index 0.",
            "whyZh": "数量依次为 1、0、1；峰值首次出现在下标 0。"
          }
        ]
      },
      {
        "kind": "code",
        "ref": "3",
        "title": "Level reservoir",
        "titleZh": "回到原水位",
        "en": "Implement level_span(changes). Each integer is a signed change in water level. Find the longest nonempty contiguous interval with total change zero that contains at least one positive change. On a tie choose the earliest start. Return [first_index, last_index] with both ends included and indices starting at 0, or None. The list has at most 100 entries.",
        "zh": "实现 level_span(changes)。每个整数是水位的有符号变化量。找出总变化为零且包含至少一个正变化量的最长非空连续区段。并列取起点最早者。返回 [起始下标, 结束下标]，两端均包含，下标从 0 开始。不存在则返回 None。最多有 100 个元素。",
        "starter": "def level_span(changes):\n    pass\n",
        "solution": "def level_span(changes):\n    best = None\n    width = 0\n    for i in range(len(changes)):\n        total = 0\n        rose = False\n        for j in range(i, len(changes)):\n            total += changes[j]\n            rose = rose or changes[j] > 0\n            if total == 0 and rose and j-i+1 > width:\n                width = j-i+1\n                best = [i,j]\n    return best\n",
        "driver": "import json\nargs = json.loads(input())\nprint(repr(level_span(*args)))\n",
        "why": "For each start, extend the endpoint while maintaining a running sum and a flag for a positive change. The all-zero interval fails that flag.",
        "whyZh": "对每个起点延伸右端，同时维护累计和与是否出现过正数。全零区段不满足正变化条件。",
        "tests": [
          {
            "input": "[[3, -1, -2, 5]]\n",
            "output": "[0, 2]",
            "call": "level_span([3, -1, -2, 5])",
            "why": "Indices 0 through 2 give [3, -1, -2], summing to zero in 3 steps. No earlier equal-length or longer eligible span exists.",
            "whyZh": "下标 0 到 2 的 [3, -1, -2] 共 3 步，总和为零。没有更长或同长度且起点更早的合格区段。"
          },
          {
            "input": "[[]]\n",
            "output": "None",
            "call": "level_span([])",
            "why": "No contiguous slice of [] has both a positive change and sum zero.",
            "whyZh": "[] 没有既含正变化又总和为零的连续区段。"
          },
          {
            "input": "[[0]]\n",
            "output": "None",
            "call": "level_span([0])",
            "why": "No contiguous slice of [0] has both a positive change and sum zero.",
            "whyZh": "[0] 没有既含正变化又总和为零的连续区段。"
          },
          {
            "input": "[[0, 0, 0]]\n",
            "output": "None",
            "call": "level_span([0, 0, 0])",
            "why": "No contiguous slice of [0, 0, 0] has both a positive change and sum zero.",
            "whyZh": "[0, 0, 0] 没有既含正变化又总和为零的连续区段。"
          },
          {
            "input": "[[3]]\n",
            "output": "None",
            "call": "level_span([3])",
            "why": "No contiguous slice of [3] has both a positive change and sum zero.",
            "whyZh": "[3] 没有既含正变化又总和为零的连续区段。"
          },
          {
            "input": "[[2, 3, -1]]\n",
            "output": "None",
            "call": "level_span([2, 3, -1])",
            "why": "No contiguous slice of [2, 3, -1] has both a positive change and sum zero.",
            "whyZh": "[2, 3, -1] 没有既含正变化又总和为零的连续区段。"
          },
          {
            "input": "[[-1, 1]]\n",
            "output": "[0, 1]",
            "call": "level_span([-1, 1])",
            "why": "Indices 0 through 1 give [-1, 1], summing to zero in 2 steps. No earlier equal-length or longer eligible span exists.",
            "whyZh": "下标 0 到 1 的 [-1, 1] 共 2 步，总和为零。没有更长或同长度且起点更早的合格区段。"
          },
          {
            "input": "[[0, -1, 1, 0]]\n",
            "output": "[0, 3]",
            "call": "level_span([0, -1, 1, 0])",
            "why": "Indices 0 through 3 give [0, -1, 1, 0], summing to zero in 4 steps. No earlier equal-length or longer eligible span exists.",
            "whyZh": "下标 0 到 3 的 [0, -1, 1, 0] 共 4 步，总和为零。没有更长或同长度且起点更早的合格区段。"
          },
          {
            "input": "[[2, -2, 5, 3, -3]]\n",
            "output": "[0, 1]",
            "call": "level_span([2, -2, 5, 3, -3])",
            "why": "Indices 0 through 1 give [2, -2], summing to zero in 2 steps. No earlier equal-length or longer eligible span exists.",
            "whyZh": "下标 0 到 1 的 [2, -2] 共 2 步，总和为零。没有更长或同长度且起点更早的合格区段。"
          },
          {
            "input": "[[9, 1, 2, -3]]\n",
            "output": "[1, 3]",
            "call": "level_span([9, 1, 2, -3])",
            "why": "Indices 1 through 3 give [1, 2, -3], summing to zero in 3 steps. No earlier equal-length or longer eligible span exists.",
            "whyZh": "下标 1 到 3 的 [1, 2, -3] 共 3 步，总和为零。没有更长或同长度且起点更早的合格区段。"
          },
          {
            "input": "[[2, -1, -1, 0, 4]]\n",
            "output": "[0, 3]",
            "call": "level_span([2, -1, -1, 0, 4])",
            "why": "Indices 0 through 3 give [2, -1, -1, 0], summing to zero in 4 steps. No earlier equal-length or longer eligible span exists.",
            "whyZh": "下标 0 到 3 的 [2, -1, -1, 0] 共 4 步，总和为零。没有更长或同长度且起点更早的合格区段。"
          },
          {
            "input": "[[-2, 3, 1, -1, -1]]\n",
            "output": "[0, 4]",
            "call": "level_span([-2, 3, 1, -1, -1])",
            "why": "Indices 0 through 4 give [-2, 3, 1, -1, -1], summing to zero in 5 steps. No earlier equal-length or longer eligible span exists.",
            "whyZh": "下标 0 到 4 的 [-2, 3, 1, -1, -1] 共 5 步，总和为零。没有更长或同长度且起点更早的合格区段。"
          },
          {
            "input": "[[1, -1, 1, -1]]\n",
            "output": "[0, 3]",
            "call": "level_span([1, -1, 1, -1])",
            "why": "Indices 0 through 3 give [1, -1, 1, -1], summing to zero in 4 steps. No earlier equal-length or longer eligible span exists.",
            "whyZh": "下标 0 到 3 的 [1, -1, 1, -1] 共 4 步，总和为零。没有更长或同长度且起点更早的合格区段。"
          }
        ]
      }
    ]
  },
  {
    "id": "3",
    "theme": "Waypoint survey",
    "themeZh": "路线勘测",
    "questions": [
      {
        "kind": "trace",
        "ref": "1.1",
        "title": "Paired counters",
        "titleZh": "成对计数器",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "whole, spare = divmod(31, 6)\nprint(whole + (spare > 0), spare == True)",
        "answer": "6 True",
        "why": "divmod yields quotient 5 and remainder 1. In arithmetic, True adds 1. The remainder 1 compares equal to True.",
        "whyZh": "divmod 给出商 5 和余数 1。在算术中 True 相当于 1，因此得 6；余数 1 与 True 比较相等。"
      },
      {
        "kind": "trace",
        "ref": "1.2",
        "title": "A split time",
        "titleZh": "分段时间",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "minutes = 125\nhours = minutes // 60\nprint(f\"{hours}:{minutes % 60:02d}\", round(minutes / 60, 1))",
        "answer": "2:05 2.1",
        "why": "125 minutes gives 2 whole hours and 5 remaining minutes. The minutes field is padded to '05'. Rounding 2.0833… to one decimal gives 2.1.",
        "whyZh": "125 分钟为 2 小时余 5 分钟。分钟字段补成 '05'。2.0833… 四舍五入到一位小数是 2.1。"
      },
      {
        "kind": "trace",
        "ref": "1.3",
        "title": "An empty compartment",
        "titleZh": "空隔间",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "s = \"0\"\nprint(bool(s), bool(int(s)), s * int(s) == \"\")",
        "answer": "True False True",
        "why": "The string '0' is nonempty. Converting it produces numeric zero, which is false. Repeating a string zero times produces the empty string.",
        "whyZh": "字符串 '0' 非空，转整数后得到 0，布尔值为假。字符串重复零次得到空字符串。"
      },
      {
        "kind": "trace",
        "ref": "1.4",
        "title": "Stepped intervals",
        "titleZh": "步进区间",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "s = list(range(1, 9, 2))\nprint(s[1:-1], s[-1:0:-2])",
        "answer": "[3, 5] [7, 3]",
        "why": "The original list is [1, 3, 5, 7]. The first slice omits both ends. The reverse slice takes indices 3 then 1, stopping before index 0.",
        "whyZh": "原列表为 [1, 3, 5, 7]。第一段切片去掉两端；反向步长为 2 的切片取索引 3 和 1，在 0 前停止。"
      },
      {
        "kind": "trace",
        "ref": "1.5",
        "title": "Parts on a tray",
        "titleZh": "托盘零件",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "tray = [1, 2, 3]\nremoved = tray.pop(1)\ntray.insert(-1, removed + 3)\nprint(removed, tray)",
        "answer": "2 [1, 5, 3]",
        "why": "pop(1) removes and returns 2, leaving [1, 3]. With two elements, insert(-1, 5) inserts just before the final 3.",
        "whyZh": "pop(1) 移除并返回 2，留下 [1, 3]。此时 insert(-1, 5) 在最后一项 3 之前插入 5。"
      },
      {
        "kind": "trace",
        "ref": "1.6",
        "title": "Box and label",
        "titleZh": "盒子与标签",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "contents = [4]\nlabel = (\"kit\", contents)\ncontents = contents + [9]\nlabel[1].append(6)\nprint(label, contents)",
        "answer": "('kit', [4, 6]) [4, 9]",
        "why": "The tuple stores the first list. Addition makes another list [4, 9] and rebinds contents. append modifies the list still inside the tuple.",
        "whyZh": "元组保存第一个列表。加法生成新列表 [4, 9]，contents 转向新列表。append 修改的是元组中的旧列表。"
      },
      {
        "kind": "trace",
        "ref": "1.7",
        "title": "Prefix mileage",
        "titleZh": "累计里程",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "trip = {\"N\": 2, \"S\": 1}\nfor direction in \"NSS\":\n    trip[direction] += len(trip)\nprint(trip)",
        "answer": "{'N': 4, 'S': 5}",
        "why": "There are always two keys. N gains 2 once, going from 2 to 4. S gains 2 twice, going from 1 to 5. Key order stays N then S.",
        "whyZh": "字典始终有两个键。N 增加一次 2，从 2 变为 4；S 增加两次 2，从 1 变为 5。键顺序仍是 N、S。"
      },
      {
        "kind": "trace",
        "ref": "1.8",
        "title": "Joining name plates",
        "titleZh": "拼接铭牌",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "plate = \" ab  CD \"\nprint(\"-\".join(plate.split()).swapcase())",
        "answer": "AB-cd",
        "why": "split() with no argument removes leading and trailing whitespace and treats a run of spaces as one separator. Joining yields 'ab-CD', then swapcase exchanges letter case.",
        "whyZh": "不带参数的 split() 忽略两端空白，把连续空白视为一个分隔符。连接后是 'ab-CD'，交换大小写得到 AB-cd。"
      },
      {
        "kind": "trace",
        "ref": "1.9",
        "title": "Stopping on a dip",
        "titleZh": "遇到下降停止",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "heights = [3, 5, 5, 2, 7]\nfor i in range(1, len(heights)):\n    if heights[i] < heights[i-1]:\n        break\nprint(i, heights[:i])",
        "answer": "3 [3, 5, 5]",
        "why": "The first rise and the equal pair do not stop the loop. Index 3 has height 2 after 5, which triggers break; the slice ends immediately before this index.",
        "whyZh": "第一对上升，第二对相等，均不会退出。索引 3 的高度 2 小于前面的 5，触发 break；切片排除索引 3。"
      },
      {
        "kind": "trace",
        "ref": "1.10",
        "title": "Short-circuit probes",
        "titleZh": "短路探测",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "visited = []\ndef probe(n):\n    visited.append(n)\n    return n > 0\n\nok = probe(-1) and probe(7) or probe(2)\nprint(ok, visited)",
        "answer": "True [-1, 2]",
        "why": "probe(-1) returns False so and skips probe(7). The left side of or is now false, so probe(2) runs and returns True. Only −1 and 2 are logged.",
        "whyZh": "probe(-1) 返回 False，and 跳过 probe(7)。or 左侧结果为假，所以执行 probe(2) 并得到 True。日志只有 −1 和 2。"
      },
      {
        "kind": "trace",
        "ref": "1.11",
        "title": "Stable loading order",
        "titleZh": "稳定的装载顺序",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "parts = [(\"q\", 2), (\"b\", 1), (\"a\", 2), (\"z\", 1)]\nparts.sort(key=lambda part: part[1])\nprint(\"\".join(name for name, size in parts))",
        "answer": "bzqa",
        "why": "Sorting by the second field places size 1 before size 2. Equal-size items retain input order, so b precedes z and q precedes a.",
        "whyZh": "按第二个字段排序后，小号排在大号前。同号零件保留原相对顺序，因此 b 在 z 前，q 在 a 前。"
      },
      {
        "kind": "trace",
        "ref": "1.12",
        "title": "Choose two ends",
        "titleZh": "选择两端",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "def edge(s):\n    if len(s) < 2:\n        return s\n    return s[-1] + edge(s[1:-1]) + s[0]\n\nprint(edge(\"cable\"))",
        "answer": "elbac",
        "why": "The outer call contributes e then c around edge('abl'). That call contributes l then a around the middle 'b'. Combining the pieces gives elbac.",
        "whyZh": "外层调用在 edge('abl') 两侧放 e 和 c；内层在中间的 b 两侧放 l 和 a，依次拼出 elbac。"
      },
      {
        "kind": "trace",
        "ref": "1.13",
        "title": "One-way markers",
        "titleZh": "单向标记",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "r = []\nfor width in range(2, 5):\n    edge = [j for j in range(width) if (j + width) % 2 == 0]\n    r.append(edge[-1])\nprint(r)",
        "answer": "[0, 1, 2]",
        "why": "At width 2 the matching positions are [0]. At width 3 only [1] matches, and at width 4 the matches are [0, 2]. Only the last position from each list is appended.",
        "whyZh": "宽度为 2 时匹配 [0]，宽度为 3 时匹配 [1]，宽度为 4 时匹配 [0, 2]。每次只追加最后一个位置。"
      },
      {
        "kind": "trace",
        "ref": "1.14",
        "title": "Tracing a merge",
        "titleZh": "跟踪归并",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "a, b = [2, 5], [2, 4]\nlog = \"\"\nwhile a and b:\n    if a[0] < b[0]:\n        a.pop(0)\n        log += \"A\"\n    else:\n        b.pop(0)\n        log += \"B\"\nprint(log, a + b)",
        "answer": "BAB [5]",
        "why": "On the tie at 2 the strict test chooses B. Next 2 beats 4 so A is chosen. Then 4 beats 5 so B is chosen. List b is empty and a still contains 5.",
        "whyZh": "两个 2 相等时严格小于不成立，先取 B。接着 2 小于 4，取 A；然后 4 小于 5，取 B。b 已空，a 中留下 5。"
      },
      {
        "kind": "code",
        "ref": "2(a)",
        "title": "Map a survey box",
        "titleZh": "筛选测量区域",
        "en": "Implement survey_box(points, xmin, xmax, ymin, ymax). A point is [unique_label, x, y]. Coordinates are integers. Distance is the Manhattan distance |x1-x2| + |y1-y2|. Return labels of points inside or on the boundary of the given rectangle, in original order. The lower and upper bounds may be equal.",
        "zh": "实现 survey_box(points, xmin, xmax, ymin, ymax)。 点的格式是 [唯一标签, x, y]，坐标为整数。曼哈顿距离为 |x1-x2| + |y1-y2|。 按原顺序返回指定矩形内及边界上的点标签。上下界可以相等。",
        "starter": "def survey_box(points, xmin, xmax, ymin, ymax):\n    pass\n",
        "solution": "def survey_box(points, xmin, xmax, ymin, ymax):\n    return [label for label,x,y in points if xmin <= x <= xmax and ymin <= y <= ymax]\n",
        "driver": "import json\nargs = json.loads(input())\nprint(repr(survey_box(*args)))\n",
        "why": "Both coordinates must satisfy inclusive bounds. Keep the original labels and traversal order.",
        "whyZh": "两个坐标都须在闭区间内。保留原标签与遍历顺序。",
        "tests": [
          {
            "input": "[[[\"A\", 1, 0], [\"B\", -1, 0], [\"C\", 2, 1], [\"D\", 2, 0]], 0, 2, 0, 0]\n",
            "output": "['A', 'D']",
            "call": "survey_box([['A', 1, 0], ['B', -1, 0], ['C', 2, 1], ['D', 2, 0]], 0, 2, 0, 0)",
            "why": "A and D lie on y=0 within x=0..2.",
            "whyZh": "A 与 D 位于 y=0 上，横坐标都在 0 到 2 之间。"
          },
          {
            "input": "[[[\"A\", 1, 0], [\"B\", -1, 0], [\"C\", 2, 1], [\"D\", 2, 0]], -1, -1, 0, 0]\n",
            "output": "['B']",
            "call": "survey_box([['A', 1, 0], ['B', -1, 0], ['C', 2, 1], ['D', 2, 0]], -1, -1, 0, 0)",
            "why": "The collapsed rectangle contains exactly B at (-1,0).",
            "whyZh": "退化为单点的矩形仅包含位于 (-1,0) 的 B。"
          },
          {
            "input": "[[], 0, 1, 0, 1]\n",
            "output": "[]",
            "call": "survey_box([], 0, 1, 0, 1)",
            "why": "There are no point records.",
            "whyZh": "没有点记录。"
          },
          {
            "input": "[[[\"A\", 1, 0], [\"B\", -1, 0], [\"C\", 2, 1], [\"D\", 2, 0]], 5, 7, -2, 2]\n",
            "output": "[]",
            "call": "survey_box([['A', 1, 0], ['B', -1, 0], ['C', 2, 1], ['D', 2, 0]], 5, 7, -2, 2)",
            "why": "Every x coordinate is below 5.",
            "whyZh": "所有横坐标都小于 5。"
          }
        ]
      },
      {
        "kind": "code",
        "ref": "2(b)",
        "title": "Select a survey point",
        "titleZh": "选出最近的测点",
        "en": "Implement nearest(points, x, y, visited). A point is [unique_label, x, y]. Coordinates are integers. Distance is the Manhattan distance |x1-x2| + |y1-y2|. Return the label of the nearest point outside the list of visited labels, or None if no candidate remains. Keep input order on a tie.",
        "zh": "实现 nearest(points, x, y, visited)。 点的格式是 [唯一标签, x, y]，坐标为整数。曼哈顿距离为 |x1-x2| + |y1-y2|。 返回未出现在已访问标签列表 visited 中且距 (x,y) 最近的标签。并列取输入中较早的点，候选为空返回 None。",
        "starter": "def nearest(points, x, y, visited):\n    pass\n",
        "solution": "def nearest(points, x, y, visited):\n    candidates = [p for p in points if p[0] not in visited]\n    if not candidates:\n        return None\n    return min(candidates, key=lambda p: abs(p[1]-x)+abs(p[2]-y))[0]\n",
        "driver": "import json\nargs = json.loads(input())\nprint(repr(nearest(*args)))\n",
        "why": "Filter visited labels before minimizing distance. min on a key retains the first item on a tie.",
        "whyZh": "先过滤已访问标签，再按距离取最小值。按键取 min 时并列保留第一项。",
        "tests": [
          {
            "input": "[[[\"A\", 1, 0], [\"B\", -1, 0], [\"C\", 2, 1], [\"D\", 2, 0]], 0, 0, []]\n",
            "output": "'A'",
            "call": "nearest([['A', 1, 0], ['B', -1, 0], ['C', 2, 1], ['D', 2, 0]], 0, 0, [])",
            "why": "A and B are both one step away; A is listed first.",
            "whyZh": "A 与 B 都只距一步，A 排在前面。"
          },
          {
            "input": "[[[\"A\", 1, 0], [\"B\", -1, 0], [\"C\", 2, 1], [\"D\", 2, 0]], 0, 0, [\"A\"]]\n",
            "output": "'B'",
            "call": "nearest([['A', 1, 0], ['B', -1, 0], ['C', 2, 1], ['D', 2, 0]], 0, 0, ['A'])",
            "why": "Skipping A leaves B as the only point one step away.",
            "whyZh": "跳过 A 后，只有 B 的距离为 1。"
          },
          {
            "input": "[[[\"A\", 1, 0], [\"B\", -1, 0], [\"C\", 2, 1], [\"D\", 2, 0]], 2, 1, []]\n",
            "output": "'C'",
            "call": "nearest([['A', 1, 0], ['B', -1, 0], ['C', 2, 1], ['D', 2, 0]], 2, 1, [])",
            "why": "C is exactly at the supplied position, giving distance zero.",
            "whyZh": "C 与给定位置重合，距离为零。"
          },
          {
            "input": "[[[\"A\", 1, 0], [\"B\", -1, 0], [\"C\", 2, 1], [\"D\", 2, 0]], 0, 0, [\"A\", \"B\", \"C\", \"D\"]]\n",
            "output": "None",
            "call": "nearest([['A', 1, 0], ['B', -1, 0], ['C', 2, 1], ['D', 2, 0]], 0, 0, ['A', 'B', 'C', 'D'])",
            "why": "Every label is in the visited list.",
            "whyZh": "所有标签均已访问。"
          }
        ]
      },
      {
        "kind": "code",
        "ref": "2(c)",
        "title": "Spend a walking budget",
        "titleZh": "按步数规划路线",
        "en": "Implement survey_route(points, x, y, budget). A point is [unique_label, x, y]. Coordinates are integers. Distance is the Manhattan distance |x1-x2| + |y1-y2|. Start at (x,y). Repeatedly visit the nearest unvisited point, breaking ties by original order. Pay its distance from your current position and move there. Stop if the cost exceeds the nonnegative remaining budget. Return the visited labels. Distinct labels may share coordinates.",
        "zh": "实现 survey_route(points, x, y, budget)。 点的格式是 [唯一标签, x, y]，坐标为整数。曼哈顿距离为 |x1-x2| + |y1-y2|。 从 (x,y) 开始，反复选择最近的未访问点，并列取原顺序靠前者。扣除从当前位置到目标的距离并移动过去。若费用超过非负剩余预算则停止。返回实际访问的标签列表。不同标签可共享坐标。",
        "starter": "def survey_route(points, x, y, budget):\n    pass\n",
        "solution": "def survey_route(points, x, y, budget):\n    todo = points[:]\n    visited = []\n    while todo:\n        p = min(todo, key=lambda p: abs(p[1]-x) + abs(p[2]-y))\n        cost = abs(p[1]-x) + abs(p[2]-y)\n        if cost > budget:\n            break\n        budget -= cost\n        visited.append(p[0])\n        x, y = p[1:]\n        todo.remove(p)\n    return visited\n",
        "driver": "import json\nargs = json.loads(input())\nprint(repr(survey_route(*args)))\n",
        "why": "Distances change after every move. Remove a point even when its cost is zero so it cannot be chosen twice.",
        "whyZh": "每次移动后重新计算距离。即使移动成本为零也要移除已选点，以免重复访问。",
        "tests": [
          {
            "input": "[[[\"A\", 1, 0], [\"B\", -1, 0], [\"C\", 2, 1], [\"D\", 2, 0]], 0, 0, 3]\n",
            "output": "['A', 'D', 'C']",
            "call": "survey_route([['A', 1, 0], ['B', -1, 0], ['C', 2, 1], ['D', 2, 0]], 0, 0, 3)",
            "why": "Move 1 to A, 1 to D, then 1 to C; the budget is spent.",
            "whyZh": "依次耗费 1 到 A、1 到 D、1 到 C，预算恰好用完。"
          },
          {
            "input": "[[[\"A\", 1, 0], [\"B\", -1, 0], [\"C\", 2, 1], [\"D\", 2, 0]], 0, 0, 0]\n",
            "output": "[]",
            "call": "survey_route([['A', 1, 0], ['B', -1, 0], ['C', 2, 1], ['D', 2, 0]], 0, 0, 0)",
            "why": "No point shares the start, so the first cost exceeds zero.",
            "whyZh": "起点没有重合点，第一步就需要正预算。"
          },
          {
            "input": "[[[\"X\", 0, 0], [\"Y\", 0, 0], [\"Z\", 0, 1]], 0, 0, 0]\n",
            "output": "['X', 'Y']",
            "call": "survey_route([['X', 0, 0], ['Y', 0, 0], ['Z', 0, 1]], 0, 0, 0)",
            "why": "Both X and Y are reachable without spending any budget.",
            "whyZh": "X、Y 均在起点，不花预算便可访问。"
          },
          {
            "input": "[[[\"A\", 1, 0], [\"B\", -1, 0], [\"C\", 2, 1], [\"D\", 2, 0]], 2, 0, 1]\n",
            "output": "['D', 'A']",
            "call": "survey_route([['A', 1, 0], ['B', -1, 0], ['C', 2, 1], ['D', 2, 0]], 2, 0, 1)",
            "why": "D costs zero; A and C then tie at 1, and A appears first.",
            "whyZh": "到 D 的成本为零；A、C 都距 D 一步，A 更靠前。"
          }
        ]
      },
      {
        "kind": "code",
        "ref": "2(d)",
        "title": "Place the base station",
        "titleZh": "布置基地",
        "en": "Implement base_site(points). A point is [unique_label, x, y]. Coordinates are integers. Distance is the Manhattan distance |x1-x2| + |y1-y2|. Choose one listed point as a base so that its greatest distance to any listed point is as small as possible. Return [label, greatest_distance]. Choose the first listed base on equal scores; return None for no points.",
        "zh": "实现 base_site(points)。 点的格式是 [唯一标签, x, y]，坐标为整数。曼哈顿距离为 |x1-x2| + |y1-y2|。 从列表中选一个点作为基地，使它到所有测点的最大距离尽可能小。返回 [标签, 最大距离]。得分相同取列表中靠前者，空列表返回 None。",
        "starter": "def base_site(points):\n    pass\n",
        "solution": "def base_site(points):\n    best = None\n    for label,x,y in points:\n        score = max(abs(a-x)+abs(b-y) for _,a,b in points)\n        if best is None or score < best[1]:\n            best = [label,score]\n    return best\n",
        "driver": "import json\nargs = json.loads(input())\nprint(repr(base_site(*args)))\n",
        "why": "Compute the maximum distance for each candidate first. Compare those maxima with a minimum.",
        "whyZh": "先分别求每个候选点的最大距离，再在这些最大值中选最小者。",
        "tests": [
          {
            "input": "[[[\"A\", 1, 0], [\"B\", -1, 0], [\"C\", 2, 1], [\"D\", 2, 0]]]\n",
            "output": "['A', 2]",
            "call": "base_site([['A', 1, 0], ['B', -1, 0], ['C', 2, 1], ['D', 2, 0]])",
            "why": "A reaches B and C in 2; all other bases have worst distance at least 3.",
            "whyZh": "A 到 B 和 C 均为 2；其他基地的最远距离至少为 3。"
          },
          {
            "input": "[[[\"K\", -7, 4]]]\n",
            "output": "['K', 0]",
            "call": "base_site([['K', -7, 4]])",
            "why": "The only point is distance zero from itself.",
            "whyZh": "唯一测点到自己距离为零。"
          },
          {
            "input": "[[]]\n",
            "output": "None",
            "call": "base_site([])",
            "why": "There is no candidate location.",
            "whyZh": "没有候选基地。"
          },
          {
            "input": "[[[\"L\", 0, 0], [\"R\", 2, 0]]]\n",
            "output": "['L', 2]",
            "call": "base_site([['L', 0, 0], ['R', 2, 0]])",
            "why": "Both worst distances are 2; the first point L wins.",
            "whyZh": "两个点的最远距离同为 2，先出现的 L 获选。"
          }
        ]
      },
      {
        "kind": "code",
        "ref": "3",
        "title": "Single-splice repair",
        "titleZh": "单段反转修复",
        "en": "Implement reverse_repair(source, target) for equal-length lowercase strings of at most 80 characters. You may reverse one contiguous block of at least two characters in source. If source already equals target, return []. Otherwise return [i,j] for the shortest block whose reversal produces target, inclusive zero-based indices. On a tie choose the earliest start. Return None if one reversal cannot repair the string.",
        "zh": "实现 reverse_repair(source, target)。两个小写字符串等长且最多 80 个字符。可将 source 中一段至少含两个字符的连续区间反转。两串本来就相同则返回 []。否则返回能得到 target 的最短反转区间 [i,j]（从零开始，两端均含）；并列取起点最早者。一次反转无法修复则返回 None。",
        "starter": "def reverse_repair(source, target):\n    pass\n",
        "solution": "def reverse_repair(source, target):\n    if source == target:\n        return []\n    for width in range(2,len(source)+1):\n        for i in range(len(source)-width+1):\n            end = i + width\n            if source[:i] + source[i:end][::-1] + source[end:] == target:\n                return [i,end-1]\n    return None\n",
        "driver": "import json\nargs = json.loads(input())\nprint(repr(reverse_repair(*args)))\n",
        "why": "A repair preserves everything outside the chosen block. Enumerating length before starting index enforces both tie rules.",
        "whyZh": "反转区间之外的部分必须保持不变。先枚举长度再枚举起点，即可满足最短和最靠前两个要求。",
        "tests": [
          {
            "input": "[\"abcde\", \"adcbe\"]\n",
            "output": "[1, 3]",
            "call": "reverse_repair('abcde', 'adcbe')",
            "why": "Reversing 'bcd' at indices 1..3 changes 'abcde' to 'adcbe'; no shorter reversal works.",
            "whyZh": "将下标 1 至 3 的 'bcd' 反转可把 'abcde' 变成 'adcbe'，没有更短的可行区间。"
          },
          {
            "input": "[\"\", \"\"]\n",
            "output": "[]",
            "call": "reverse_repair('', '')",
            "why": "'' already matches the target; no reversal is required.",
            "whyZh": "'' 已与目标相同，无需反转。"
          },
          {
            "input": "[\"a\", \"a\"]\n",
            "output": "[]",
            "call": "reverse_repair('a', 'a')",
            "why": "'a' already matches the target; no reversal is required.",
            "whyZh": "'a' 已与目标相同，无需反转。"
          },
          {
            "input": "[\"a\", \"b\"]\n",
            "output": "None",
            "call": "reverse_repair('a', 'b')",
            "why": "No single contiguous reversal of 'a' produces 'b'.",
            "whyZh": "'a' 没有一段连续区间反转后能得到 'b'。"
          },
          {
            "input": "[\"ab\", \"ba\"]\n",
            "output": "[0, 1]",
            "call": "reverse_repair('ab', 'ba')",
            "why": "Reversing 'ab' at indices 0..1 changes 'ab' to 'ba'; no shorter reversal works.",
            "whyZh": "将下标 0 至 1 的 'ab' 反转可把 'ab' 变成 'ba'，没有更短的可行区间。"
          },
          {
            "input": "[\"ab\", \"ac\"]\n",
            "output": "None",
            "call": "reverse_repair('ab', 'ac')",
            "why": "No single contiguous reversal of 'ab' produces 'ac'.",
            "whyZh": "'ab' 没有一段连续区间反转后能得到 'ac'。"
          },
          {
            "input": "[\"aabb\", \"bbaa\"]\n",
            "output": "[0, 3]",
            "call": "reverse_repair('aabb', 'bbaa')",
            "why": "Reversing 'aabb' at indices 0..3 changes 'aabb' to 'bbaa'; no shorter reversal works.",
            "whyZh": "将下标 0 至 3 的 'aabb' 反转可把 'aabb' 变成 'bbaa'，没有更短的可行区间。"
          },
          {
            "input": "[\"cabac\", \"cabac\"]\n",
            "output": "[]",
            "call": "reverse_repair('cabac', 'cabac')",
            "why": "'cabac' already matches the target; no reversal is required.",
            "whyZh": "'cabac' 已与目标相同，无需反转。"
          },
          {
            "input": "[\"abcde\", \"edcba\"]\n",
            "output": "[0, 4]",
            "call": "reverse_repair('abcde', 'edcba')",
            "why": "Reversing 'abcde' at indices 0..4 changes 'abcde' to 'edcba'; no shorter reversal works.",
            "whyZh": "将下标 0 至 4 的 'abcde' 反转可把 'abcde' 变成 'edcba'，没有更短的可行区间。"
          },
          {
            "input": "[\"abcde\", \"badce\"]\n",
            "output": "None",
            "call": "reverse_repair('abcde', 'badce')",
            "why": "No single contiguous reversal of 'abcde' produces 'badce'.",
            "whyZh": "'abcde' 没有一段连续区间反转后能得到 'badce'。"
          },
          {
            "input": "[\"abbca\", \"acbba\"]\n",
            "output": "[1, 3]",
            "call": "reverse_repair('abbca', 'acbba')",
            "why": "Reversing 'bbc' at indices 1..3 changes 'abbca' to 'acbba'; no shorter reversal works.",
            "whyZh": "将下标 1 至 3 的 'bbc' 反转可把 'abbca' 变成 'acbba'，没有更短的可行区间。"
          },
          {
            "input": "[\"zzabc\", \"zzcba\"]\n",
            "output": "[2, 4]",
            "call": "reverse_repair('zzabc', 'zzcba')",
            "why": "Reversing 'abc' at indices 2..4 changes 'zzabc' to 'zzcba'; no shorter reversal works.",
            "whyZh": "将下标 2 至 4 的 'abc' 反转可把 'zzabc' 变成 'zzcba'，没有更短的可行区间。"
          },
          {
            "input": "[\"abczz\", \"cbazz\"]\n",
            "output": "[0, 2]",
            "call": "reverse_repair('abczz', 'cbazz')",
            "why": "Reversing 'abc' at indices 0..2 changes 'abczz' to 'cbazz'; no shorter reversal works.",
            "whyZh": "将下标 0 至 2 的 'abc' 反转可把 'abczz' 变成 'cbazz'，没有更短的可行区间。"
          }
        ]
      }
    ]
  },
  {
    "id": "4",
    "theme": "Ranked ballots",
    "themeZh": "排序选票",
    "questions": [
      {
        "kind": "trace",
        "ref": "1.1",
        "title": "Pairs of brackets",
        "titleZh": "成对括号",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "n = 3\nprint(2 ** n ** 2, (2 ** n) + 2 * n)",
        "answer": "512 14",
        "why": "Exponentiation groups from the right. First 3² gives 9 and then 2⁹ gives 512. The second expression adds 8 and 6.",
        "whyZh": "幂从右向左结合，先求 3²=9，再求 2⁹=512。第二个表达式把 8 和 6 相加。"
      },
      {
        "kind": "trace",
        "ref": "1.2",
        "title": "Convert the receipt",
        "titleZh": "收据数值转换",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "cost = \"7.90\"\nprint(int(float(cost)) * 2, f\"{float(cost) * 2:.2f}\")",
        "answer": "14 15.80",
        "why": "Converting 7.9 to int first discards the fractional part, so the first multiplication gives 14. The second uses the full float and formats two decimals.",
        "whyZh": "先将 7.9 转为 int 会截去小数部分，所以第一项乘完是 14。第二项保留原浮点值计算，并格式化为两位小数。"
      },
      {
        "kind": "trace",
        "ref": "1.3",
        "title": "Tray comparisons",
        "titleZh": "托盘比较",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "a = [2, 10]\nb = [2, 3, 8]\nprint(a < b, str(a[1]) < str(b[1]))",
        "answer": "False True",
        "why": "The leading 2s tie, so the list comparison uses 10 versus 3 and yields False. String comparison checks '1' against '3' first, so '10' is smaller.",
        "whyZh": "列表首项 2 相等，接着比较数字 10 与 3，得到 False。字符串比较先看 '1' 与 '3'，因此 '10' 更小。"
      },
      {
        "kind": "trace",
        "ref": "1.4",
        "title": "A shortened serial",
        "titleZh": "缩短序列号",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "serial = \"AX-041-AX\"\nleft, code, right = serial.split(\"-\")\nprint(left == right, code[1:] + code[:1])",
        "answer": "True 410",
        "why": "Both outer fields are 'AX'. The middle field stays the string '041', so its last two characters '41' followed by its first '0' give '410'.",
        "whyZh": "两端字段均为 'AX'。中间字段仍是字符串 '041'，后两位 '41' 接上第一位 '0' 得 '410'。"
      },
      {
        "kind": "trace",
        "ref": "1.5",
        "title": "Two loop variables",
        "titleZh": "两个循环变量",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "v = [5, 6, 7]\nfor n in v:\n    n += 2\nfor i in range(0, len(v), 2):\n    v[i] -= 1\nprint(v, n)",
        "answer": "[4, 6, 6] 9",
        "why": "The first loop changes only the local name n, which ends at 9. The second writes to list indices 0 and 2, decreasing 5 and 7 by one.",
        "whyZh": "第一个循环只更改名字 n，最终 n=9。第二个循环写入索引 0 和 2，把 5 和 7 各减一。"
      },
      {
        "kind": "trace",
        "ref": "1.6",
        "title": "Boards and pegs",
        "titleZh": "板子与木钉",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "a = [[], []]\nb = a[::-1]\nb[0].append(7)\na[0] = a[1]\nprint(a, b)",
        "answer": "[[7], [7]] [[7], []]",
        "why": "b reverses references to the original two inner lists. Its first item is the original second item, which becomes [7]. Replacing a[0] makes both slots of a share it; b[1] still holds the original empty first item.",
        "whyZh": "b 反转两个内层列表的引用。b[0] 是原第二个列表，追加后为 [7]。替换 a[0] 使 a 两项都指向它，而 b[1] 仍是原先的第一个空列表。"
      },
      {
        "kind": "trace",
        "ref": "1.7",
        "title": "Paired tags",
        "titleZh": "标签配对",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "labels = {}\nfor left, right in zip(\"ABA\", [4, 3, 2]):\n    labels[left] = right\nprint(list(labels.items()))",
        "answer": "[('A', 2), ('B', 3)]",
        "why": "The pairs write A=4, then B=3, then overwrite A with 2. Updating A leaves it in its original position ahead of B.",
        "whyZh": "三次写入依次是 A=4、B=3、A=2。更新 A 的值后，键 A 仍排在 B 前。"
      },
      {
        "kind": "trace",
        "ref": "1.8",
        "title": "Mark overlapped bands",
        "titleZh": "标记重叠条带",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "s = \"aaaaa\"\nprint(s.count(\"aa\"), s.find(\"aa\", 1), s.replace(\"aa\", \"b\"))",
        "answer": "2 1 bba",
        "why": "count and replace take non-overlapping pairs at indices 0 and 2. The last 'a' remains. find starts at index 1 and can match the pair beginning there.",
        "whyZh": "count 与 replace 选取起点为 0 和 2 的不重叠字符对，末尾剩一个 a。find 从索引 1 起查找，能匹配该处开头的一对。"
      },
      {
        "kind": "trace",
        "ref": "1.9",
        "title": "A countdown strip",
        "titleZh": "倒计时纸带",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "n = 19\ndigits = []\nwhile n:\n    n, d = divmod(n, 3)\n    digits.insert(0, d)\nprint(digits)",
        "answer": "[2, 0, 1]",
        "why": "The successive quotient/remainder pairs are (6,1), (2,0), (0,2). Inserting each remainder at the front reverses the order they were obtained.",
        "whyZh": "先后得到的商与余数是 (6,1)、(2,0)、(0,2)。余数每次插在开头，最后的顺序正好与取得顺序相反。"
      },
      {
        "kind": "trace",
        "ref": "1.10",
        "title": "A returned pair",
        "titleZh": "返回的一对数",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "def advance(pair):\n    x, y = pair\n    return y, x + y\n\np = (1, 3)\nfor _ in range(3):\n    p = advance(p)\nprint(p)",
        "answer": "(7, 11)",
        "why": "The first call maps (1,3) to (3,4). Applying the same rule again gives (4,7), then (7,11). The function always returns a tuple.",
        "whyZh": "第一次把 (1,3) 变成 (3,4)，再调用得到 (4,7)，第三次得到 (7,11)。函数每次返回元组。"
      },
      {
        "kind": "trace",
        "ref": "1.11",
        "title": "A single sorting pass",
        "titleZh": "一次排序遍历",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "a = [4, 1, 3, 2]\nfor i in range(len(a)-1, 0, -1):\n    if a[i] < a[i-1]:\n        a[i-1], a[i] = a[i], a[i-1]\nprint(a)",
        "answer": "[1, 4, 2, 3]",
        "why": "Scanning right to left first swaps 2 with 3, giving [4,1,2,3]. The middle pair is in order. Finally 1 swaps with 4; no further pass runs.",
        "whyZh": "从右向左先交换 2 和 3，得到 [4,1,2,3]。中间的一对已按序排列。最后 1 与 4 交换，程序只做这一轮。"
      },
      {
        "kind": "trace",
        "ref": "1.12",
        "title": "Counting a tree walk",
        "titleZh": "统计树遍历",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "def score(node):\n    if isinstance(node, int):\n        return 1\n    return 1 + sum(score(child) for child in node)\n\nprint(score([2, [], [4, 8]]))",
        "answer": "6",
        "why": "The top-level list contributes 1, the integer 2 contributes 1, and the empty list also contributes 1. The list [4,8] contributes 3 including its two children. The total is 6.",
        "whyZh": "最外层列表、整数 2 和空列表各贡献 1。[4,8] 连同其两个子节点贡献 3，合计 6。"
      },
      {
        "kind": "trace",
        "ref": "1.13",
        "title": "Running averages",
        "titleZh": "移动的平均数",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "v = [2, 8, 2, 8]\nfor i in range(1, len(v)):\n    v[i] = (v[i-1] + v[i]) // 2\nprint(v)",
        "answer": "[2, 5, 3, 5]",
        "why": "Each calculation uses the already-updated left neighbour. The successive results are (2+8)//2=5, (5+2)//2=3 and (3+8)//2=5.",
        "whyZh": "每次计算都使用已更新的左邻项。三次结果分别为 (2+8)//2=5、(5+2)//2=3、(3+8)//2=5。"
      },
      {
        "kind": "trace",
        "ref": "1.14",
        "title": "Two tally sheets",
        "titleZh": "两张计数表",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "def tally(x, counts):\n    if x:\n        tally(x[1:], counts)\n        k = x[0]\n        counts[k] = counts.get(k, 0) + 1\n\nd = {}\ntally(\"peeped\", d)\nprint(list(d.items()))",
        "answer": "[('d', 1), ('e', 3), ('p', 2)]",
        "why": "The updates run after each recursive call. Reading peeped from right to left creates the keys d, e, p in that order. The counts are one d, three es and two ps.",
        "whyZh": "更新发生在递归调用返回后，从右往左处理 peeped。键按 d、e、p 的顺序创建，出现次数分别为 1、3、2。"
      },
      {
        "kind": "code",
        "ref": "2(a)",
        "title": "Clean a ballot",
        "titleZh": "清洗选票",
        "en": "Implement clean_ballot(raw, names). names contains distinct uppercase candidate codes. Normalize each raw string by stripping outer whitespace and converting to uppercase. Return valid codes in preference order, keeping only the first occurrence of each. An empty ballot is valid input.",
        "zh": "实现 clean_ballot(raw, names)。names 含互不相同的大写候选人编号。将每个原始字符串去掉两端空白并转为大写。按偏好顺序保留有效编号，每个编号只保留首次出现。选票可以为空。",
        "starter": "def clean_ballot(raw, names):\n    pass\n",
        "solution": "def clean_ballot(raw, names):\n    result = []\n    for mark in raw:\n        code = mark.strip().upper()\n        if code in names and code not in result:\n            result.append(code)\n    return result\n",
        "driver": "import json\nargs = json.loads(input())\nprint(repr(clean_ballot(*args)))\n",
        "why": "Normalize first so repeated spellings such as a and A are recognized as one candidate.",
        "whyZh": "先规范化，再去重，才会把 a 和 A 识别为同一人。",
        "tests": [
          {
            "input": "[[\" b \", \"a\", \"B\", \"x\"], [\"A\", \"B\"]]\n",
            "output": "['B', 'A']",
            "call": "clean_ballot([' b ', 'a', 'B', 'x'], ['A', 'B'])",
            "why": "The second B is a duplicate and X is ineligible.",
            "whyZh": "第二个 B 重复，X 无资格。"
          },
          {
            "input": "[[], [\"A\"]]\n",
            "output": "[]",
            "call": "clean_ballot([], ['A'])",
            "why": "An empty ranking contributes no codes.",
            "whyZh": "空偏好列表不包含任何编号。"
          },
          {
            "input": "[[\" \", \"?\"], [\"E\"]]\n",
            "output": "[]",
            "call": "clean_ballot([' ', '?'], ['E'])",
            "why": "Neither normalized entry equals E.",
            "whyZh": "两个标记规范化后均不是 E。"
          },
          {
            "input": "[[\" z1\", \"z\", \"Z1\"], [\"Z\", \"Z1\"]]\n",
            "output": "['Z1', 'Z']",
            "call": "clean_ballot([' z1', 'z', 'Z1'], ['Z', 'Z1'])",
            "why": "Z1 is listed before Z even though the candidate registry lists Z first.",
            "whyZh": "偏好中 Z1 先于 Z，登记表的顺序不改变该结果。"
          }
        ]
      },
      {
        "kind": "code",
        "ref": "2(b)",
        "title": "Count active preferences",
        "titleZh": "统计有效首选",
        "en": "Implement tally(ballots, active). Each ballot is an ordered list of distinct candidate codes. Allocate one vote to the first code on that ballot still in active; ignore a ballot with none. Return a list of integer counts aligned with the distinct codes in active, including zero counts.",
        "zh": "实现 tally(ballots, active)。每张票按偏好列出互不相同的编号。将一票计给该票中首个仍在 active 的编号；没有则忽略。按 active 中各不同编号的顺序返回整型票数列表，包括零票。",
        "starter": "def tally(ballots, active):\n    pass\n",
        "solution": "def tally(ballots, active):\n    counts = {name:0 for name in active}\n    for ballot in ballots:\n        for name in ballot:\n            if name in counts:\n                counts[name] += 1\n                break\n    return [counts[name] for name in active]\n",
        "driver": "import json\nargs = json.loads(input())\nprint(repr(tally(*args)))\n",
        "why": "Break after the first active preference on each ballot. Returning counts in registry order also preserves zeros.",
        "whyZh": "每张票找到一个有效偏好后便停止。按登记顺序输出也会保留零票者。",
        "tests": [
          {
            "input": "[[[\"A\", \"C\"], [\"B\", \"A\"], [\"B\"], [\"C\", \"A\"], [\"C\", \"B\"]], [\"A\", \"C\"]]\n",
            "output": "[2, 2]",
            "call": "tally([['A', 'C'], ['B', 'A'], ['B'], ['C', 'A'], ['C', 'B']], ['A', 'C'])",
            "why": "Votes go A,A,none,C,C after B is excluded.",
            "whyZh": "排除 B 后各张票依次投 A、A、弃权、C、C。"
          },
          {
            "input": "[[], [\"Y\", \"X\"]]\n",
            "output": "[0, 0]",
            "call": "tally([], ['Y', 'X'])",
            "why": "Both active candidates remain present with zero counts.",
            "whyZh": "两位候选人都应保留，票数均为零。"
          },
          {
            "input": "[[[\"A\", \"C\"], [\"B\", \"A\"], [\"B\"], [\"C\", \"A\"], [\"C\", \"B\"]], []]\n",
            "output": "[]",
            "call": "tally([['A', 'C'], ['B', 'A'], ['B'], ['C', 'A'], ['C', 'B']], [])",
            "why": "There are no active candidates to align counts with.",
            "whyZh": "没有有效候选人，计数列表为空。"
          },
          {
            "input": "[[[], [\"C\", \"B\"], [\"B\", \"C\"]], [\"B\", \"C\", \"Z\"]]\n",
            "output": "[1, 1, 0]",
            "call": "tally([[], ['C', 'B'], ['B', 'C']], ['B', 'C', 'Z'])",
            "why": "The empty ballot is exhausted; C and B each receive one vote and Z receives none.",
            "whyZh": "空票耗尽，C 与 B 各获一票，Z 为零票。"
          }
        ]
      },
      {
        "kind": "code",
        "ref": "2(c)",
        "title": "Head-to-head result",
        "titleZh": "两人对决",
        "en": "Implement duel(ballots, left, right), with distinct codes left and right. Each ballot ranks distinct codes; it supports whichever of the two appears first. If neither appears it abstains. Return the winning code, or None if the two totals tie.",
        "zh": "实现 duel(ballots, left, right)，两编号互不相同。每张票按顺序列出不同编号。将一票计给两人中靠前出现的那位，都未出现则弃权。返回胜者编号，平局返回 None。",
        "starter": "def duel(ballots, left, right):\n    pass\n",
        "solution": "def duel(ballots, left, right):\n    score = 0\n    for ballot in ballots:\n        for name in ballot:\n            if name == left or name == right:\n                score += 1 if name == left else -1\n                break\n    if score:\n        return left if score > 0 else right\n    return None\n",
        "driver": "import json\nargs = json.loads(input())\nprint(repr(duel(*args)))\n",
        "why": "Look for the first of the two names on each ballot. A name does not need to be the ballot’s first overall preference.",
        "whyZh": "每张票只看这两人中先出现的编号；它不一定是整张票的首选。",
        "tests": [
          {
            "input": "[[[\"A\", \"C\"], [\"B\", \"A\"], [\"B\"], [\"C\", \"A\"], [\"C\", \"B\"]], \"A\", \"C\"]\n",
            "output": "None",
            "call": "duel([['A', 'C'], ['B', 'A'], ['B'], ['C', 'A'], ['C', 'B']], 'A', 'C')",
            "why": "The tally is A 2, C 2; one ballot ranks only B.",
            "whyZh": "A、C 各 2 票，另有一票只排 B。"
          },
          {
            "input": "[[[\"A\", \"C\"], [\"B\", \"A\"], [\"B\"], [\"C\", \"A\"], [\"C\", \"B\"]], \"B\", \"C\"]\n",
            "output": "'C'",
            "call": "duel([['A', 'C'], ['B', 'A'], ['B'], ['C', 'A'], ['C', 'B']], 'B', 'C')",
            "why": "C takes ballots 1, 4 and 5; B takes 2 and 3 (ballots numbered from 1).",
            "whyZh": "从第 1 张起计，C 获第 1、4、5 张，B 获第 2、3 张。"
          },
          {
            "input": "[[[\"X\", \"L\"]], \"L\", \"R\"]\n",
            "output": "'L'",
            "call": "duel([['X', 'L']], 'L', 'R')",
            "why": "After skipping X, the ballot supports L.",
            "whyZh": "跳过 X 后此票投给 L。"
          },
          {
            "input": "[[[\"Z\"], []], \"L\", \"R\"]\n",
            "output": "None",
            "call": "duel([['Z'], []], 'L', 'R')",
            "why": "Both ballots abstain, leaving a 0–0 tie.",
            "whyZh": "两票都弃权，结果为 0 比 0。"
          }
        ]
      },
      {
        "kind": "code",
        "ref": "2(d)",
        "title": "Run the elimination",
        "titleZh": "运行淘汰选举",
        "en": "Implement elect(ballots, registry). Candidate codes in registry are distinct and in registration order. In every round each ballot votes for its first still-active code. If no votes are cast, return None. If anyone has strictly more than half the votes cast that round, return that code. Otherwise eliminate ONE candidate with the smallest total (zeros included), using the LAST in original registry order on a tie. Repeat with the same ballots. An empty registry returns None.",
        "zh": "实现 elect(ballots, registry)。registry 按登记顺序列出互异候选人。每轮每张票投给首位仍在场的编号。若本轮无人获票则返回 None。若有人严格超过本轮有效票数的一半，返回其编号。否则只淘汰一名票数最少者（包括零票），并列淘汰原登记顺序最后者。用原选票继续下一轮。登记表为空返回 None。",
        "starter": "def elect(ballots, registry):\n    pass\n",
        "solution": "def elect(ballots, registry):\n    active = registry[:]\n    while active:\n        counts = {k:0 for k in active}\n        for ballot in ballots:\n            for k in ballot:\n                if k in counts:\n                    counts[k] += 1\n                    break\n        total = sum(counts.values())\n        if total == 0:\n            return None\n        lead = max(active, key=counts.get)\n        if counts[lead]*2 > total:\n            return lead\n        low = min(reversed(active), key=counts.get)\n        active.remove(low)\n    return None\n",
        "driver": "import json\nargs = json.loads(input())\nprint(repr(elect(*args)))\n",
        "why": "Recalculate exhausted ballots after each elimination. A tie for last eliminates exactly one candidate, going backwards through the registry.",
        "whyZh": "每淘汰一人都重新分配选票并更新有效票数。末位并列时按登记逆序只淘汰一人。",
        "tests": [
          {
            "input": "[[[\"A\", \"C\"], [\"B\", \"A\"], [\"B\"], [\"C\", \"A\"], [\"C\", \"B\"]], [\"A\", \"B\", \"C\"]]\n",
            "output": "'C'",
            "call": "elect([['A', 'C'], ['B', 'A'], ['B'], ['C', 'A'], ['C', 'B']], ['A', 'B', 'C'])",
            "why": "Round one gives A=1, B=2, C=2. A is removed and its A,C ballot transfers to C for a 3–2 win.",
            "whyZh": "首轮 A=1、B=2、C=2。淘汰 A 后，A,C 票转给 C，C 以 3 比 2 获胜。"
          },
          {
            "input": "[[[\"L\"], [\"R\"]], [\"L\", \"R\"]]\n",
            "output": "'L'",
            "call": "elect([['L'], ['R']], ['L', 'R'])",
            "why": "At 1–1 the later registrant R is eliminated; L then has the only active vote.",
            "whyZh": "1 比 1 时淘汰后登记的 R；下一轮唯一有效票属于 L。"
          },
          {
            "input": "[[[\"X\"], []], [\"A\", \"B\"]]\n",
            "output": "None",
            "call": "elect([['X'], []], ['A', 'B'])",
            "why": "No ballot names an active candidate, so the first round has zero votes.",
            "whyZh": "没有选票列出有效编号，首轮有效票数为零。"
          },
          {
            "input": "[[[\"A\"], [\"A\"], [\"B\"], [\"C\"]], [\"A\", \"B\", \"C\"]]\n",
            "output": "'A'",
            "call": "elect([['A'], ['A'], ['B'], ['C']], ['A', 'B', 'C'])",
            "why": "A has exactly half initially. C loses the tie with B; C’s ballot exhausts and A now has 2 of 3.",
            "whyZh": "A 首轮恰获一半。C 与 B 并列末位且后登记，淘汰 C。其票耗尽后 A 有 3 票中的 2 票。"
          }
        ]
      },
      {
        "kind": "code",
        "ref": "3",
        "title": "Deepest sample",
        "titleZh": "最深一层的样本",
        "en": "Implement deepest_samples(item). A sample is an integer or a finite list of samples with at most 40 nesting levels. The root is at depth 0; moving into a list element adds 1. Return [depth, values] for the deepest depth containing any integer, keeping all integers at that depth in left-to-right traversal order, including duplicates. Return None if there are no integers. Do not modify item.",
        "zh": "实现 deepest_samples(item)。样本是整数或由样本组成的有限列表，最多嵌套 40 层。根深度为 0，每次进入列表元素深度加 1。返回 [深度, 数值列表]，列出最深含整数层的所有整数，按从左到右的遍历顺序保留重复值。无整数返回 None。不得修改 item。",
        "starter": "def deepest_samples(item):\n    pass\n",
        "solution": "def deepest_samples(item):\n    def visit(node, depth):\n        if isinstance(node, int):\n            return [depth, [node]]\n        best = None\n        for child in node:\n            found = visit(child, depth+1)\n            if found is None:\n                continue\n            if best is None or found[0] > best[0]:\n                best = found\n            elif found[0] == best[0]:\n                best[1].extend(found[1])\n        return best\n    return visit(item,0)\n",
        "driver": "import json\nargs = json.loads(input())\nbefore = repr(args[0])\nanswer = deepest_samples(*args)\nif repr(args[0]) != before:\n    raise ValueError(\"deepest_samples modified its input\")\nprint(repr(answer))\n",
        "why": "An integer is its own one-value answer. Compare the depths returned by the children; concatenate values only when their depths tie. Empty groups contribute no sample.",
        "whyZh": "整数自身给出单元素答案。比较各子分支返回的深度，只有深度相同才拼接数值。空组不贡献样本。",
        "tests": [
          {
            "input": "[[3, [5, 7], [2]]]\n",
            "output": "[2, [5, 7, 2]]",
            "call": "deepest_samples([3, [5, 7], [2]])",
            "why": "The deepest integer samples occur at depth 2. In left-to-right order they are [5, 7, 2], including repetitions.",
            "whyZh": "最深的整数样本位于深度 2，从左到右依次为 [5, 7, 2]，重复项也保留。"
          },
          {
            "input": "[0]\n",
            "output": "[0, [0]]",
            "call": "deepest_samples(0)",
            "why": "The deepest integer samples occur at depth 0. In left-to-right order they are [0], including repetitions.",
            "whyZh": "最深的整数样本位于深度 0，从左到右依次为 [0]，重复项也保留。"
          },
          {
            "input": "[-3]\n",
            "output": "[0, [-3]]",
            "call": "deepest_samples(-3)",
            "why": "The deepest integer samples occur at depth 0. In left-to-right order they are [-3], including repetitions.",
            "whyZh": "最深的整数样本位于深度 0，从左到右依次为 [-3]，重复项也保留。"
          },
          {
            "input": "[[]]\n",
            "output": "None",
            "call": "deepest_samples([])",
            "why": "Every branch ends in an empty list; there is no integer sample.",
            "whyZh": "各分支都止于空列表，没有任何整数样本。"
          },
          {
            "input": "[[[], [[]]]]\n",
            "output": "None",
            "call": "deepest_samples([[], [[]]])",
            "why": "Every branch ends in an empty list; there is no integer sample.",
            "whyZh": "各分支都止于空列表，没有任何整数样本。"
          },
          {
            "input": "[[1, 2, 3]]\n",
            "output": "[1, [1, 2, 3]]",
            "call": "deepest_samples([1, 2, 3])",
            "why": "The deepest integer samples occur at depth 1. In left-to-right order they are [1, 2, 3], including repetitions.",
            "whyZh": "最深的整数样本位于深度 1，从左到右依次为 [1, 2, 3]，重复项也保留。"
          },
          {
            "input": "[[1, [2, [3]]]]\n",
            "output": "[3, [3]]",
            "call": "deepest_samples([1, [2, [3]]])",
            "why": "The deepest integer samples occur at depth 3. In left-to-right order they are [3], including repetitions.",
            "whyZh": "最深的整数样本位于深度 3，从左到右依次为 [3]，重复项也保留。"
          },
          {
            "input": "[[[[4]], 9]]\n",
            "output": "[3, [4]]",
            "call": "deepest_samples([[[4]], 9])",
            "why": "The deepest integer samples occur at depth 3. In left-to-right order they are [4], including repetitions.",
            "whyZh": "最深的整数样本位于深度 3，从左到右依次为 [4]，重复项也保留。"
          },
          {
            "input": "[[[2, 2], [2]]]\n",
            "output": "[2, [2, 2, 2]]",
            "call": "deepest_samples([[2, 2], [2]])",
            "why": "The deepest integer samples occur at depth 2. In left-to-right order they are [2, 2, 2], including repetitions.",
            "whyZh": "最深的整数样本位于深度 2，从左到右依次为 [2, 2, 2]，重复项也保留。"
          },
          {
            "input": "[[[8], [[1, 0]], [4]]]\n",
            "output": "[3, [1, 0]]",
            "call": "deepest_samples([[8], [[1, 0]], [4]])",
            "why": "The deepest integer samples occur at depth 3. In left-to-right order they are [1, 0], including repetitions.",
            "whyZh": "最深的整数样本位于深度 3，从左到右依次为 [1, 0]，重复项也保留。"
          },
          {
            "input": "[[[[5]], [[6]]]]\n",
            "output": "[3, [5, 6]]",
            "call": "deepest_samples([[[5]], [[6]]])",
            "why": "The deepest integer samples occur at depth 3. In left-to-right order they are [5, 6], including repetitions.",
            "whyZh": "最深的整数样本位于深度 3，从左到右依次为 [5, 6]，重复项也保留。"
          },
          {
            "input": "[[[[[[]]]], 4]]\n",
            "output": "[1, [4]]",
            "call": "deepest_samples([[[[[]]]], 4])",
            "why": "The deepest integer samples occur at depth 1. In left-to-right order they are [4], including repetitions.",
            "whyZh": "最深的整数样本位于深度 1，从左到右依次为 [4]，重复项也保留。"
          },
          {
            "input": "[[[], [0, [-2, -2]], [-3]]]\n",
            "output": "[3, [-2, -2]]",
            "call": "deepest_samples([[], [0, [-2, -2]], [-3]])",
            "why": "The deepest integer samples occur at depth 3. In left-to-right order they are [-2, -2], including repetitions.",
            "whyZh": "最深的整数样本位于深度 3，从左到右依次为 [-2, -2]，重复项也保留。"
          }
        ]
      }
    ]
  },
  {
    "id": "5",
    "theme": "Workshop queue",
    "themeZh": "工坊队列",
    "questions": [
      {
        "kind": "trace",
        "ref": "1.1",
        "title": "Convert a distance",
        "titleZh": "换算距离",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "m = 47\nprint(m // 10 * 10, m - m % 10, m / 10)",
        "answer": "40 40 4.7",
        "why": "47 // 10 is 4, which scales back to 40. Removing the remainder 7 also gives 40. Ordinary division retains the fractional part.",
        "whyZh": "47 整除 10 为 4，再乘回 10 得 40。用 47 减去余数 7 也得 40。普通除法保留小数部分。"
      },
      {
        "kind": "trace",
        "ref": "1.2",
        "title": "Given two limits",
        "titleZh": "两个界限",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "x = 3\nprint(not 2 < x <= 3, x in range(2, 3), x != 2 or x < 0)",
        "answer": "False False True",
        "why": "The chained comparison includes the upper endpoint 3, so negating it gives False. range(2,3) excludes 3. The final or is true as soon as x differs from 2.",
        "whyZh": "链式比较包含上端点 3，取反得到 False。range(2,3) 不含 3。最后的 or 因为 x 不等于 2 而为真。"
      },
      {
        "kind": "trace",
        "ref": "1.3",
        "title": "Reading a scale",
        "titleZh": "读取刻度",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "sample = 2.25\nprint(f\"{sample:.1f}\", f\"{sample + 0.5:.1f}\")",
        "answer": "2.2 2.8",
        "why": "Both inputs are exactly representable and lie halfway between two tenths. Formatting uses the even last digit at a tie, giving 2.2 for 2.25 and 2.8 for 2.75.",
        "whyZh": "两个数都能精确表示，恰好在两个十分位刻度中间。格式化遇到平分时选择末位为偶数的结果，分别为 2.2 和 2.8。"
      },
      {
        "kind": "trace",
        "ref": "1.4",
        "title": "Seat labels",
        "titleZh": "座位标签",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "keys = tuple(\"ABC\")\nvalues = tuple(range(2, 8, 2))\nprint(keys[1] * values[0], values[1:2])",
        "answer": "BB (4,)",
        "why": "keys[1] is 'B' and values[0] is 2, so the repetition yields BB. The slice keeps only the second value 4 and preserves the tuple type.",
        "whyZh": "keys[1] 为 B，values[0] 为 2，重复后为 BB。切片只保留第二个值 4，结果仍为元组。"
      },
      {
        "kind": "trace",
        "ref": "1.5",
        "title": "A two-place rotation",
        "titleZh": "移动两个位置",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "queue = [1, 2, 3, 4]\nfront = queue[:2]\ndel queue[:2]\nqueue.extend(front[::-1])\nprint(queue, front)",
        "answer": "[3, 4, 2, 1] [1, 2]",
        "why": "front is a slice copy [1,2]. Removing the first two entries leaves [3,4]. Extending that queue with the reversed copy appends 2,1 while front retains its order.",
        "whyZh": "front 是切片副本 [1,2]。删除最前两项后 queue 为 [3,4]。扩展时追加反向的 2、1，而 front 顺序不变。"
      },
      {
        "kind": "trace",
        "ref": "1.6",
        "title": "Shelf slots",
        "titleZh": "书架格位",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "a = [[1], [3]]\nb = a.copy()\nb[0] = b[0] + b[1]\nb[1][0] *= 2\nprint(a, b)",
        "answer": "[[1], [6]] [[1, 3], [6]]",
        "why": "Adding the two inner lists creates a new [1,3] for b[0]. The second slot is still shared, so doubling its integer changes both displays. The 3 already copied into b[0] remains 3.",
        "whyZh": "两个内层列表相加会为 b[0] 生成新列表 [1,3]。第二个位置仍共享，因此把其中的整数翻倍会体现在两个外层列表中。b[0] 中之前复制的 3 保持原值。"
      },
      {
        "kind": "trace",
        "ref": "1.7",
        "title": "A lookup table",
        "titleZh": "查找表",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "d = {\"east\": 2}\nold = d.get(\"west\", d[\"east\"])\nd[\"east\"] += 3\nprint(\"west\" in d, old, d[\"east\"])",
        "answer": "False 2 5",
        "why": "get returns the supplied default 2 for the absent key without inserting 'west'. Updating 'east' changes its value to 5, while old keeps the earlier integer 2.",
        "whyZh": "west 键缺失时，get 返回默认值 2，字典不会新增 west。随后 east 的值改为 5，old 仍保存先前的整数 2。"
      },
      {
        "kind": "trace",
        "ref": "1.8",
        "title": "A field of letters",
        "titleZh": "一串字母",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "s = \"retest\"\nprint(s.index(\"t\"), s.rfind(\"t\"), s[1:5].count(\"e\"))",
        "answer": "2 5 2",
        "why": "The first t is at index 2 and the last t is at index 5. The slice from 1 through 4 is 'etes', containing two e characters.",
        "whyZh": "首个 t 位于索引 2，最后一个 t 位于索引 5。索引 1 至 4 的切片是 'etes'，含两个 e。"
      },
      {
        "kind": "trace",
        "ref": "1.9",
        "title": "Tracking a drained tank",
        "titleZh": "追踪排水过程",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "level, ticks = 11, 0\nwhile level > 1:\n    level -= level // 2\n    ticks += 1\nprint(ticks, level)",
        "answer": "4 1",
        "why": "Subtracting the floor half gives levels 11→6→3→2→1. Four loop iterations run before the condition fails.",
        "whyZh": "每次减去当前水位的一半并向下取整，水位依次为 11→6→3→2→1。条件失效前共执行四轮。"
      },
      {
        "kind": "trace",
        "ref": "1.10",
        "title": "Swapping and extending",
        "titleZh": "交换与扩展",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "def alter(a, b):\n    a, b = b, a\n    a.append(b.pop())\n\nx, y = [1, 2], [7]\nalter(x, y)\nprint(x, y)",
        "answer": "[1] [7, 2]",
        "why": "The local swap makes a refer to y and b refer to x. Popping from b removes 2 from x, and appending that value to a extends y.",
        "whyZh": "局部交换后 a 指向 y，b 指向 x。从 b 弹出 2 实际修改的是 x，再把 2 追加到 a 即修改 y。"
      },
      {
        "kind": "trace",
        "ref": "1.11",
        "title": "Best candidate",
        "titleZh": "候选项选择",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "v = [4, 2, 2, 3]\nbest = 0\nfor i in range(1, len(v)):\n    if v[i] <= v[best]:\n        best = i\nv[0], v[best] = v[best], v[0]\nprint(best, v)",
        "answer": "2 [2, 2, 4, 3]",
        "why": "The minimum value 2 occurs twice. The <= comparison updates best on a tie, so the later index 2 wins. Swapping indices 0 and 2 moves 4 to index 2.",
        "whyZh": "最小值 2 出现两次。<= 在相等时仍更新 best，因此选中后面的索引 2。交换索引 0 和 2 后，4 被放到索引 2。"
      },
      {
        "kind": "trace",
        "ref": "1.12",
        "title": "Odd-length branches",
        "titleZh": "奇数长度的分支",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "def split_sizes(n):\n    if n <= 2:\n        return [n]\n    return split_sizes(n // 2) + split_sizes(n - n // 2)\n\nprint(split_sizes(7))",
        "answer": "[1, 2, 2, 2]",
        "why": "The root splits 7 into 3 and 4. The left branch splits 3 into [1,2], while the right splits 4 into [2,2]. The two lists are concatenated left first.",
        "whyZh": "7 先拆成 3 与 4。左支把 3 拆成 [1,2]，右支把 4 拆成 [2,2]。返回时先左后右连接两个列表。"
      },
      {
        "kind": "trace",
        "ref": "1.13",
        "title": "Changing neighbourhoods",
        "titleZh": "变化的相邻项",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "s = \"abbaa\"\nout = \"\"\nfor i in range(len(s) - 1):\n    if s[i] == s[i + 1]:\n        out += str(i)\n    else:\n        out += s[i]\nprint(out)",
        "answer": "a1b3",
        "why": "The pairs ab, bb, ba, aa start at indices 0 through 3. Different neighbours contribute their left character; equal neighbours contribute the index. The four pieces are a, 1, b, 3.",
        "whyZh": "四对相邻字符 ab、bb、ba、aa 的起始索引为 0 至 3。不同字符对取左字符，相同字符对取索引，依次得到 a、1、b、3。"
      },
      {
        "kind": "trace",
        "ref": "1.14",
        "title": "Triangle ledger",
        "titleZh": "三角形记录表",
        "en": "Write the single line printed by this Python program.",
        "zh": "写出这段 Python 程序打印的一行输出。",
        "code": "rows = [[], [], []]\nfor col in range(3):\n    for row in range(col, 3):\n        rows[row].append(10 * col + row)\nprint(rows)",
        "answer": "[[0], [1, 11], [2, 12, 22]]",
        "why": "Column 0 writes 0,1,2 into the three rows. Column 1 writes 11,12 into rows 1 and 2. Column 2 writes 22 into row 2 only. Each row has its own list.",
        "whyZh": "第 0 列分别向三行写入 0、1、2。第 1 列向后两行写入 11、12。第 2 列只向最后一行写入 22。每行是独立列表。"
      },
      {
        "kind": "code",
        "ref": "2(a)",
        "title": "List the waiting jobs",
        "titleZh": "列出已到达的任务",
        "en": "Implement ready_names(jobs, now, done). Each job is [unique_name, arrival, duration]. Arrival is a nonnegative integer minute and duration a positive integer. The input need not be sorted. Return the names of jobs that have arrived by minute now and whose names are absent from done, in original input order.",
        "zh": "实现 ready_names(jobs, now, done)。 每个任务是 [唯一名称, 到达时间, 时长]。到达时间为非负整数分钟，时长为正整数，输入未必有序。 按原输入顺序返回截至 now 已到达、且名称不在 done 中的任务。",
        "starter": "def ready_names(jobs, now, done):\n    pass\n",
        "solution": "def ready_names(jobs, now, done):\n    return [name for name,arrival,duration in jobs if arrival <= now and name not in done]\n",
        "driver": "import json\nargs = json.loads(input())\nprint(repr(ready_names(*args)))\n",
        "why": "A job arriving exactly now is available. Apply both the arrival and completion checks.",
        "whyZh": "恰好在当前时刻到达也算就绪。要同时检查到达时间和完成状态。",
        "tests": [
          {
            "input": "[[[\"R\", 3, 3], [\"S\", 1, 2], [\"T\", 1, 2], [\"U\", 0, 5]], 1, [\"U\"]]\n",
            "output": "['S', 'T']",
            "call": "ready_names([['R', 3, 3], ['S', 1, 2], ['T', 1, 2], ['U', 0, 5]], 1, ['U'])",
            "why": "S and T arrive exactly at 1; U is already done and R arrives later.",
            "whyZh": "S、T 恰在 1 到达；U 已完成，R 还未到达。"
          },
          {
            "input": "[[[\"R\", 3, 3], [\"S\", 1, 2], [\"T\", 1, 2], [\"U\", 0, 5]], 0, []]\n",
            "output": "['U']",
            "call": "ready_names([['R', 3, 3], ['S', 1, 2], ['T', 1, 2], ['U', 0, 5]], 0, [])",
            "why": "Only U arrives at minute zero.",
            "whyZh": "仅 U 在分钟 0 到达。"
          },
          {
            "input": "[[[\"R\", 3, 3], [\"S\", 1, 2], [\"T\", 1, 2], [\"U\", 0, 5]], 9, [\"R\", \"T\"]]\n",
            "output": "['S', 'U']",
            "call": "ready_names([['R', 3, 3], ['S', 1, 2], ['T', 1, 2], ['U', 0, 5]], 9, ['R', 'T'])",
            "why": "S and U are both eligible; input order puts S first.",
            "whyZh": "S、U 均符合条件，原顺序中 S 在前。"
          },
          {
            "input": "[[[\"A\", 5, 1]], 2, []]\n",
            "output": "[]",
            "call": "ready_names([['A', 5, 1]], 2, [])",
            "why": "The only job arrives after minute 2.",
            "whyZh": "唯一任务在分钟 2 之后才到达。"
          }
        ]
      },
      {
        "kind": "code",
        "ref": "2(b)",
        "title": "Select the next repair",
        "titleZh": "选择下一项维修",
        "en": "Implement next_job(jobs, now, done). Each job is [unique_name, arrival, duration]. Arrival is a nonnegative integer minute and duration a positive integer. The input need not be sorted. Among unfinished jobs that have arrived by now, choose the shortest duration, breaking ties by earlier arrival, then earlier input position. Return its name, or None if the queue is empty.",
        "zh": "实现 next_job(jobs, now, done)。 每个任务是 [唯一名称, 到达时间, 时长]。到达时间为非负整数分钟，时长为正整数，输入未必有序。 从截至 now 已到达且名称不在 done 中者选择时长最短的任务；并列先比到达时间，再比原输入位置，均取较早者。返回任务名称，没有候选返回 None。",
        "starter": "def next_job(jobs, now, done):\n    pass\n",
        "solution": "def next_job(jobs, now, done):\n    ready = [j for j in jobs if j[1] <= now and j[0] not in done]\n    if ready:\n        return min(ready, key=lambda j: (j[2],j[1]))[0]\n    return None\n",
        "driver": "import json\nargs = json.loads(input())\nprint(repr(next_job(*args)))\n",
        "why": "Filter readiness before comparing (duration, arrival). Stable traversal keeps the original order on a complete tie.",
        "whyZh": "先过滤就绪任务，再比较 (时长, 到达时间)。完全并列时保留原输入顺序。",
        "tests": [
          {
            "input": "[[[\"R\", 3, 3], [\"S\", 1, 2], [\"T\", 1, 2], [\"U\", 0, 5]], 3, []]\n",
            "output": "'S'",
            "call": "next_job([['R', 3, 3], ['S', 1, 2], ['T', 1, 2], ['U', 0, 5]], 3, [])",
            "why": "S and T tie on duration and arrival; S is the earlier input row.",
            "whyZh": "S 和 T 的时长、到达时间相同，S 输入更靠前。"
          },
          {
            "input": "[[[\"A\", 3, 2], [\"B\", 1, 2]], 5, []]\n",
            "output": "'B'",
            "call": "next_job([['A', 3, 2], ['B', 1, 2]], 5, [])",
            "why": "Both take two minutes, but B arrived at 1, before A at 3.",
            "whyZh": "两项都用时 2，但 B 在 1 到达，比 A 的 3 早。"
          },
          {
            "input": "[[[\"R\", 3, 3], [\"S\", 1, 2], [\"T\", 1, 2], [\"U\", 0, 5]], 1, [\"U\", \"S\", \"T\"]]\n",
            "output": "None",
            "call": "next_job([['R', 3, 3], ['S', 1, 2], ['T', 1, 2], ['U', 0, 5]], 1, ['U', 'S', 'T'])",
            "why": "R has not arrived and every other job is done.",
            "whyZh": "R 尚未到达，其他任务均已完成。"
          },
          {
            "input": "[[[\"R\", 3, 3], [\"S\", 1, 2], [\"T\", 1, 2], [\"U\", 0, 5]], 3, [\"S\", \"T\"]]\n",
            "output": "'R'",
            "call": "next_job([['R', 3, 3], ['S', 1, 2], ['T', 1, 2], ['U', 0, 5]], 3, ['S', 'T'])",
            "why": "Among R and U, the durations are 3 and 5; choose R.",
            "whyZh": "剩余 R、U 的时长分别为 3 和 5，故选 R。"
          }
        ]
      },
      {
        "kind": "code",
        "ref": "2(c)",
        "title": "Build the repair schedule",
        "titleZh": "生成维修时间表",
        "en": "Implement schedule(jobs). Each job is [unique_name, arrival, duration]. Arrival is a nonnegative integer minute and duration a positive integer. The input need not be sorted. One technician starts free at minute 0. Whenever free, start the shortest ready job; break ties by earlier arrival, then earlier input position. Finish it before starting another. When idle with nothing ready, advance to the next arrival. Return [[name, start, finish], ...] in service order. A job may start at another job’s finish minute.",
        "zh": "实现 schedule(jobs)。 每个任务是 [唯一名称, 到达时间, 时长]。到达时间为非负整数分钟，时长为正整数，输入未必有序。 一名技师在分钟 0 空闲。每次空闲时选已到达且未完成的最短任务；并列依次按较早到达、较早输入选择。开始后必须做完该任务才可开始下一项。无任务就绪时跳到下一次到达。按服务顺序返回 [[名称, 开始时间, 完成时间], ...]。一个任务可在另一项完成的同一分钟开始。",
        "starter": "def schedule(jobs):\n    pass\n",
        "solution": "def schedule(jobs):\n    remain = jobs[:]\n    result = []\n    now = 0\n    while remain:\n        now = max(now, min(j[1] for j in remain))\n        ready = [j for j in remain if j[1] <= now]\n        job = min(ready, key=lambda j:(j[2],j[1]))\n        end = now + job[2]\n        result.append([job[0],now,end])\n        remain.remove(job)\n        now = end\n    return result\n",
        "driver": "import json\nargs = json.loads(input())\nprint(repr(schedule(*args)))\n",
        "why": "Jump to the next arrival only when necessary. Rebuild the ready set after a job finishes because new jobs may have arrived in the meantime.",
        "whyZh": "仅当没有就绪任务时才跳到下一次到达。每次完成后要重建候选集合，因为执行期间可能有新任务到达。",
        "tests": [
          {
            "input": "[[[\"R\", 3, 3], [\"S\", 1, 2], [\"T\", 1, 2], [\"U\", 0, 5]]]\n",
            "output": "[['U', 0, 5], ['S', 5, 7], ['T', 7, 9], ['R', 9, 12]]",
            "call": "schedule([['R', 3, 3], ['S', 1, 2], ['T', 1, 2], ['U', 0, 5]])",
            "why": "U is alone at 0. At 5, S and T take priority over the longer R; ties put S first.",
            "whyZh": "分钟 0 仅 U 到达。分钟 5 时 S、T 均短于 R，且 S 先于 T。"
          },
          {
            "input": "[[]]\n",
            "output": "[]",
            "call": "schedule([])",
            "why": "No jobs means no service intervals.",
            "whyZh": "没有任务就不产生服务区间。"
          },
          {
            "input": "[[[\"B\", 8, 1], [\"A\", 2, 3]]]\n",
            "output": "[['A', 2, 5], ['B', 8, 9]]",
            "call": "schedule([['B', 8, 1], ['A', 2, 3]])",
            "why": "The technician waits until 2, finishes A at 5, then waits again until 8.",
            "whyZh": "技师等到 2 开始 A，5 完成，再等到 8。"
          },
          {
            "input": "[[[\"X\", 0, 8], [\"Y\", 1, 1]]]\n",
            "output": "[['X', 0, 8], ['Y', 8, 9]]",
            "call": "schedule([['X', 0, 8], ['Y', 1, 1]])",
            "why": "Y cannot interrupt X when it arrives at 1.",
            "whyZh": "Y 在 1 到达时不能中断正在进行的 X。"
          }
        ]
      },
      {
        "kind": "code",
        "ref": "2(d)",
        "title": "Find a maintenance gap",
        "titleZh": "寻找维护空档",
        "en": "Implement first_gap(bookings, release, duration). Each booking is [start, end] and occupies minutes start up to but excluding end. Bookings may overlap and are unsorted; 0 <= start < end. Return the earliest integer t >= release at which an uninterrupted maintenance job of positive duration fits without overlapping any booking. Endpoints may touch. An interval after all bookings is allowed.",
        "zh": "实现 first_gap(bookings, release, duration)。每项预约是 [开始, 结束]，占用从开始到结束之前的分钟，0 ≤ 开始 < 结束。预约无序且可重叠。返回最早的整数时刻 t ≥ release，使持续正整数 duration 分钟的维护不与任何预约重叠。区间端点可相接。允许在全部预约之后开始。",
        "starter": "def first_gap(bookings, release, duration):\n    pass\n",
        "solution": "def first_gap(bookings, release, duration):\n    t = release\n    for start,end in sorted(bookings):\n        if end <= t:\n            continue\n        if t + duration <= start:\n            break\n        t = end\n    return t\n",
        "driver": "import json\nargs = json.loads(input())\nprint(repr(first_gap(*args)))\n",
        "why": "In start-time order, skip bookings already ended. Accept an exact-fit gap; otherwise advance beyond the conflicting booking.",
        "whyZh": "按开始时间扫描，跳过已结束的预约。恰好能放入的空档也有效；若冲突则延后至该预约结束。",
        "tests": [
          {
            "input": "[[[6, 9], [1, 3]], 2, 3]\n",
            "output": "3",
            "call": "first_gap([[6, 9], [1, 3]], 2, 3)",
            "why": "Release 2 is occupied. The gap [3,6) is exactly three minutes.",
            "whyZh": "释放时刻 2 被占用；空档 [3,6) 恰好 3 分钟。"
          },
          {
            "input": "[[], 7, 5]\n",
            "output": "7",
            "call": "first_gap([], 7, 5)",
            "why": "With no bookings, the release minute is available.",
            "whyZh": "没有预约，释放时刻即可开始。"
          },
          {
            "input": "[[[2, 7], [5, 10], [1, 3]], 2, 2]\n",
            "output": "10",
            "call": "first_gap([[2, 7], [5, 10], [1, 3]], 2, 2)",
            "why": "Together the overlapping bookings occupy [1,10); the first usable start is 10.",
            "whyZh": "各预约重叠后占用 [1,10)，故最早可从 10 开始。"
          },
          {
            "input": "[[[0, 2], [4, 5], [7, 9]], 2, 3]\n",
            "output": "9",
            "call": "first_gap([[0, 2], [4, 5], [7, 9]], 2, 3)",
            "why": "The gaps [2,4) and [5,7) are both too short for three minutes.",
            "whyZh": "空档 [2,4) 和 [5,7) 均不足 3 分钟，只能等到 9。"
          }
        ]
      },
      {
        "kind": "code",
        "ref": "3",
        "title": "Parallel profiles",
        "titleZh": "平行读数走势",
        "en": "Implement parallel_profiles(a, b). Each list contains at most 60 integer readings. Find contiguous windows of the same length, at least two, such that adding one fixed integer offset to every reading in the first window gives the second window. The windows may begin at different indices. Return [start_in_a, start_in_b, length] for the longest match. Break ties by smallest start_in_a, then smallest start_in_b. Return None if there is no match.",
        "zh": "实现 parallel_profiles(a, b)。两个列表各含最多 60 个整数读数。寻找两段等长且长度至少为 2 的连续窗口，使第一段每个数加同一个整数偏移量后得到第二段。两段起点下标可以不同。返回最长匹配的 [a 中起点, b 中起点, 长度]；并列先取 a 中起点最小者，再取 b 中起点最小者。无解返回 None。",
        "starter": "def parallel_profiles(a, b):\n    pass\n",
        "solution": "def parallel_profiles(a, b):\n    best = None\n    for i in range(len(a)):\n        for j in range(len(b)):\n            offset = b[j] - a[i]\n            n = 1\n            while i+n < len(a) and j+n < len(b) and a[i+n]+offset == b[j+n]:\n                n += 1\n            if n >= 2 and (best is None or n > best[2]):\n                best = [i,j,n]\n    return best\n",
        "driver": "import json\nargs = json.loads(input())\nprint(repr(parallel_profiles(*args)))\n",
        "why": "For each possible pair of starts, the first two readings (one from each list) fix the offset. Extend only while that same offset continues to hold.",
        "whyZh": "枚举两边的起点。各取一个起始读数后偏移量便已确定；只有偏移量持续相同时才能继续延长。",
        "tests": [
          {
            "input": "[[8, 1, 4, 6], [20, 23, 25]]\n",
            "output": "[1, 0, 3]",
            "call": "parallel_profiles([8, 1, 4, 6], [20, 23, 25])",
            "why": "At starts (1, 0), adding 19 to each reading of [1, 4, 6] gives [20, 23, 25]. Length 3 is maximal, using the required tie order.",
            "whyZh": "从 (1, 0) 开始，[1, 4, 6] 各项加 19 就得到 [20, 23, 25]。长度 3 为最大值，起点按规定的并列规则选出。"
          },
          {
            "input": "[[], []]\n",
            "output": "None",
            "call": "parallel_profiles([], [])",
            "why": "There is no pair of length-two windows with the same consecutive change. A single reading cannot establish a profile.",
            "whyZh": "两边没有一对长度为 2 且相邻变化相同的窗口。只有一个读数不能构成走势。"
          },
          {
            "input": "[[], [1, 2]]\n",
            "output": "None",
            "call": "parallel_profiles([], [1, 2])",
            "why": "There is no pair of length-two windows with the same consecutive change. A single reading cannot establish a profile.",
            "whyZh": "两边没有一对长度为 2 且相邻变化相同的窗口。只有一个读数不能构成走势。"
          },
          {
            "input": "[[2, 4], [9]]\n",
            "output": "None",
            "call": "parallel_profiles([2, 4], [9])",
            "why": "There is no pair of length-two windows with the same consecutive change. A single reading cannot establish a profile.",
            "whyZh": "两边没有一对长度为 2 且相邻变化相同的窗口。只有一个读数不能构成走势。"
          },
          {
            "input": "[[1, 2], [2, 4]]\n",
            "output": "None",
            "call": "parallel_profiles([1, 2], [2, 4])",
            "why": "There is no pair of length-two windows with the same consecutive change. A single reading cannot establish a profile.",
            "whyZh": "两边没有一对长度为 2 且相邻变化相同的窗口。只有一个读数不能构成走势。"
          },
          {
            "input": "[[1, 3], [0, 2]]\n",
            "output": "[0, 0, 2]",
            "call": "parallel_profiles([1, 3], [0, 2])",
            "why": "At starts (0, 0), adding -1 to each reading of [1, 3] gives [0, 2]. Length 2 is maximal, using the required tie order.",
            "whyZh": "从 (0, 0) 开始，[1, 3] 各项加 -1 就得到 [0, 2]。长度 2 为最大值，起点按规定的并列规则选出。"
          },
          {
            "input": "[[7, 7, 7], [4, 4, 4, 4]]\n",
            "output": "[0, 0, 3]",
            "call": "parallel_profiles([7, 7, 7], [4, 4, 4, 4])",
            "why": "At starts (0, 0), adding -3 to each reading of [7, 7, 7] gives [4, 4, 4]. Length 3 is maximal, using the required tie order.",
            "whyZh": "从 (0, 0) 开始，[7, 7, 7] 各项加 -3 就得到 [4, 4, 4]。长度 3 为最大值，起点按规定的并列规则选出。"
          },
          {
            "input": "[[1, 2, 6, 7], [4, 5]]\n",
            "output": "[0, 0, 2]",
            "call": "parallel_profiles([1, 2, 6, 7], [4, 5])",
            "why": "At starts (0, 0), adding 3 to each reading of [1, 2] gives [4, 5]. Length 2 is maximal, using the required tie order.",
            "whyZh": "从 (0, 0) 开始，[1, 2] 各项加 3 就得到 [4, 5]。长度 2 为最大值，起点按规定的并列规则选出。"
          },
          {
            "input": "[[2, 6], [1, 5, 2, 6]]\n",
            "output": "[0, 0, 2]",
            "call": "parallel_profiles([2, 6], [1, 5, 2, 6])",
            "why": "At starts (0, 0), adding -1 to each reading of [2, 6] gives [1, 5]. Length 2 is maximal, using the required tie order.",
            "whyZh": "从 (0, 0) 开始，[2, 6] 各项加 -1 就得到 [1, 5]。长度 2 为最大值，起点按规定的并列规则选出。"
          },
          {
            "input": "[[1, 4, 2], [10, 13, 11]]\n",
            "output": "[0, 0, 3]",
            "call": "parallel_profiles([1, 4, 2], [10, 13, 11])",
            "why": "At starts (0, 0), adding 9 to each reading of [1, 4, 2] gives [10, 13, 11]. Length 3 is maximal, using the required tie order.",
            "whyZh": "从 (0, 0) 开始，[1, 4, 2] 各项加 9 就得到 [10, 13, 11]。长度 3 为最大值，起点按规定的并列规则选出。"
          },
          {
            "input": "[[-3, -5, -2], [-1, -3, 0]]\n",
            "output": "[0, 0, 3]",
            "call": "parallel_profiles([-3, -5, -2], [-1, -3, 0])",
            "why": "At starts (0, 0), adding 2 to each reading of [-3, -5, -2] gives [-1, -3, 0]. Length 3 is maximal, using the required tie order.",
            "whyZh": "从 (0, 0) 开始，[-3, -5, -2] 各项加 2 就得到 [-1, -3, 0]。长度 3 为最大值，起点按规定的并列规则选出。"
          },
          {
            "input": "[[7, 6, 8, 3], [9, 6, 5, 7, 0]]\n",
            "output": "[0, 1, 3]",
            "call": "parallel_profiles([7, 6, 8, 3], [9, 6, 5, 7, 0])",
            "why": "At starts (0, 1), adding -1 to each reading of [7, 6, 8] gives [6, 5, 7]. Length 3 is maximal, using the required tie order.",
            "whyZh": "从 (0, 1) 开始，[7, 6, 8] 各项加 -1 就得到 [6, 5, 7]。长度 3 为最大值，起点按规定的并列规则选出。"
          },
          {
            "input": "[[0, 1, 3, 5], [3, 4, 7, 9]]\n",
            "output": "[0, 0, 2]",
            "call": "parallel_profiles([0, 1, 3, 5], [3, 4, 7, 9])",
            "why": "At starts (0, 0), adding 3 to each reading of [0, 1] gives [3, 4]. Length 2 is maximal, using the required tie order.",
            "whyZh": "从 (0, 0) 开始，[0, 1] 各项加 3 就得到 [3, 4]。长度 2 为最大值，起点按规定的并列规则选出。"
          }
        ]
      }
    ]
  }
];
