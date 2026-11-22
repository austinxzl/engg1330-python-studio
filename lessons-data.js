window.LESSONS = [
  {
    "unit": "L2",
    "intro": "A machine packs samples into trays. Start by printing a single value, then teach the program to read a quantity, calculate with it and decide which message to show.",
    "introZh": "机器要把样品装进托盘。先让程序显示一个值，再让它读入数量、算出结果，并根据结果选择要显示的文字。",
    "sections": [
      {
        "title": "Run your first two instructions",
        "titleZh": "运行前两条指令",
        "en": "Python executes these lines from top to bottom. print(...) displays the value inside its parentheses and then starts a new output line. Quotes mark the beginning and end of text. The characters inside the quotes appear in the output.",
        "zh": "Python 从上往下依次执行每一行。print(...) 显示圆括号里的值，然后换行。引号标出一段文字从哪里开始、到哪里结束。屏幕上会显示引号里的内容。",
        "code": "print(\"Tray A\")\nprint(2 + 3)",
        "input": "",
        "output": "Tray A\n5",
        "tryEn": "Put quotes around 2 + 3 in the second line. Predict which characters will appear.",
        "tryZh": "给第二行的 2 + 3 加上引号，先猜屏幕会显示哪些字符。"
      },
      {
        "title": "Give a value a name",
        "titleZh": "用名字保存值",
        "en": "Read an assignment from right to left. trays = 3 attaches the name trays to the value 3. When Python reaches trays = trays + 2, it reads the current value, adds two, then assigns the result to the same name. The comma in print separates two values, which appear with a space between them.",
        "zh": "赋值时先算等号右边，再把结果交给左边的名字。trays = 3 让名字 trays 指向数值 3。遇到 trays = trays + 2，Python 先取出当时的 3，加 2，再让 trays 指向 5。print 中的逗号把两个待显示的值隔开，输出时它们之间有一个空格。",
        "code": "trays = 3\nprint(\"Before\", trays)\ntrays = trays + 2\nprint(\"After\", trays)",
        "input": "",
        "output": "Before 3\nAfter 5",
        "tryEn": "Change the first 3 to 10. Now shorten the update to trays += 2. Check that the new count is still 12.",
        "tryZh": "把初值 3 改成 10，再把更新那行简写成 trays += 2。运行后检查新数量是否仍为 12。"
      },
      {
        "title": "Recognize four kinds of value",
        "titleZh": "认识四种值",
        "en": "4 is an integer (int), 4.0 is a floating-point number (float), \"4\" is text (str), and True is a truth value (bool). type(x) tells you which type a value has. Python adds two integers with + and joins two strings with the same symbol. A variable can later be assigned a value of a different type.",
        "zh": "4 是整数 int，4.0 是浮点数 float，\"4\" 是字符串 str，True 是布尔值 bool。用 type(x) 查看值的类型。两个整数之间的 + 做加法，两个字符串之间的 + 拼接文字。同一个变量也可以先存整数，再存字符串。",
        "code": "count = 4\nprint(type(count))\nprint(count + count)\ncount = \"4\"\nprint(type(count))\nprint(count + count)",
        "input": "",
        "output": "<class 'int'>\n8\n<class 'str'>\n44",
        "tryEn": "Add print(type(4.0), type(True)). Try replacing count with Count only in the last line. Variable names are case-sensitive.",
        "tryZh": "加一行 print(type(4.0), type(True))。再试着只把最后一行的 count 改成 Count，观察报错。变量名区分大小写。"
      },
      {
        "title": "Name variables and read type hints",
        "titleZh": "给变量起名，读懂类型提示",
        "en": "A name such as tray_count can contain letters, digits and underscores. Its first character must be a letter or underscore, and a keyword such as if is reserved. In tray_count: int = 4, the colon and int document the intended type. Python still uses the actual assigned value when it calculates.",
        "zh": "变量名可以包含字母、数字和下划线，例如 tray_count。首字符必须是字母或下划线，if 这样的关键字要留给 Python。tray_count: int = 4 中的冒号和 int 是给读代码的人看的类型提示。计算时，Python 依然使用实际赋进去的值。",
        "code": "tray_count: int = 4\nprint(tray_count + 1)\ntray_count = \"4\"\nprint(type(tray_count))",
        "input": "",
        "output": "5\n<class 'str'>",
        "tryEn": "Change the final assignment to int(\"4\"). What type is printed now? Which line actually converts the text?",
        "tryZh": "把最后一次赋值改为 tray_count = int(\"4\")。现在输出哪种类型？真正执行转换的是哪一行？"
      },
      {
        "title": "Choose the calculation order",
        "titleZh": "安排计算顺序",
        "en": "Multiplication uses *, division uses /, and powers use **. Python evaluates parentheses first. In the remaining expression powers bind before multiplication or division, which bind before addition or subtraction. Each group of six is counted separately in the second line.",
        "zh": "乘法用 *，除法用 /，乘方用 **。括号里的表达式先算。其余部分先算乘方，再算乘除，最后算加减。第二行先把 2 和 4 相加，得到一组 6，然后将这组 6 乘 3。",
        "code": "print(2 + 4 * 3)\nprint((2 + 4) * 3)\nprint(2 ** 3, 6 / 3)",
        "input": "",
        "output": "14\n18\n8 2.0",
        "tryEn": "Predict both results of print(-2 ** 2, (-2) ** 2). In the first expression Python raises 2 to a power before applying the minus sign.",
        "tryZh": "试着预测 print(-2 ** 2, (-2) ** 2) 的两个结果。第一个表达式先算 2 的乘方，再加上负号。"
      },
      {
        "title": "Count full trays and leftovers",
        "titleZh": "数出整盘和余数",
        "en": "Suppose each tray holds four samples. With 19 samples, four complete trays use 16, leaving three. For integers, // gives the quotient rounded down and % gives the matching remainder. The original count can be rebuilt from the two answers.",
        "zh": "每盘能放 4 个样品。19 个样品能装满 4 盘，用掉 16 个，剩下 3 个。整数之间用 // 得到向下取整的商，用 % 得到与它对应的余数。把两个答案代回去，就能还原原始数量。",
        "code": "samples = 19\nsize = 4\nfull = samples // size\nleft = samples % size\nprint(full, left)\nprint(full * size + left)",
        "input": "",
        "output": "4 3\n19",
        "tryEn": "Try samples = 20, then -1. For -1 with size 4, the quotient is -1 and the remainder is 3. Check the reconstruction.",
        "tryZh": "先改成 samples = 20，再改成 -1。-1 除以 4 的商向下取整为 -1，余数为 3。检查它们能否还原 -1。"
      },
      {
        "title": "Read data from the input box",
        "titleZh": "从输入框读取数据",
        "en": "Open the input box below the editor, enter 08 without quotes, then click Run. Each call to input() reads one line and returns its text. int(text) converts integer text to a number, float(text) converts decimal text, and str(value) produces text. Here the same input can be joined to another string or converted for arithmetic.",
        "zh": "在编辑器下方的输入框填入 08（不用加引号），再点「运行」。每调用一次 input() 就从中读一行，得到字符串。int(text) 可以把整数字符串转成整数，float(text) 能把小数字符串转成浮点数，str(value) 能把值转成字符串。这里同一份输入既能用来拼接文字，也能转换后参加运算。",
        "code": "text = input()\nprint(\"Batch \" + text)\nsamples = int(text)\nprint(samples + 1)",
        "input": "08\n",
        "output": "Batch 08\n9",
        "tryEn": "Change the input to 12.5 and run. Then change int(text) to float(text) and run again. Which line starts working?",
        "tryZh": "把输入改成 12.5 并运行。再把 int(text) 改为 float(text)，看看哪一行现在能成功执行。"
      },
      {
        "title": "Ask a yes-or-no question",
        "titleZh": "提出一个真假问题",
        "en": "A comparison produces either True or False. Use == to test equality and != to test inequality. < and > compare sizes, and <= or >= include equality. For a positive divisor of 2, a remainder of 0 tells you the number is even.",
        "zh": "比较运算产生 True 或 False。== 判断是否相等，!= 判断是否不等。<、> 比较大小，<=、>= 也把相等算进去。整数除以 2 的余数为 0，表示这个数是偶数。",
        "code": "count = 8\nprint(count == 8, count != 8)\nprint(count > 8, count >= 8)\nprint(count % 2 == 0)",
        "input": "",
        "output": "True False\nFalse True\nTrue",
        "tryEn": "Set count to 7. Predict all five truth values before running.",
        "tryZh": "把 count 改为 7。运行前先写下五个判断各是真是假。"
      },
      {
        "title": "Combine conditions for a safe reading",
        "titleZh": "合并安全读数的条件",
        "en": "Suppose a reading from 2 through 8 is safe only when the sensor is online. and requires both conditions to be true, or accepts either, and not flips a truth value. The chained comparison 2 <= value <= 8 checks both endpoints. Parentheses make it easy to see which question you are answering.",
        "zh": "假设读数要落在 2 到 8 之间，而且传感器必须在线。and 要求两边都为真，or 只要一边为真，not 把真假反过来。连写 2 <= value <= 8 会检查两个端点。把一组判断括起来，就容易看清每一步在问什么。",
        "code": "value = 8\nonline = True\nprint((2 <= value <= 8) and online)\nprint((value < 2) or (value > 8))\nprint(not online)",
        "input": "",
        "output": "True\nFalse\nFalse",
        "tryEn": "Set online to False. Then change value to 9. Which changes affect the first answer? Which affect the second?",
        "tryZh": "把 online 改成 False，再把 value 改为 9。分别观察第一项和第二项判断受哪次变动影响。"
      },
      {
        "title": "Know when Python stops checking a condition",
        "titleZh": "知道条件何时停止求值",
        "en": "Python checks the left side of and first. If it is false, the whole condition is false, so Python skips the right side. With or, a true left side is enough to skip the right side. For mixed conditions, comparisons run before not, then and, then or.",
        "zh": "Python 先检查 and 左侧；如果已经为假，整个判断就为假，右侧不再计算。这叫短路求值。遇到 or 时，左侧为真就会跳过右侧。混合条件中，比较运算先于 not，其后才算 and，最后算 or。",
        "code": "items = 0\ntotal = 12\nprint(items > 0 and total / items >= 3)\nprint(items == 0 or total / items < 3)",
        "input": "",
        "output": "False\nTrue",
        "tryEn": "With zero items both divisions are skipped. Set items to 4 and work through both lines again. Which side now needs the average?",
        "tryZh": "items 为 0 时，两行都会跳过除法。把 items 改为 4，重新逐步判断。两行分别会在什么时候用到平均值？"
      },
      {
        "title": "Choose a branch with indentation",
        "titleZh": "用缩进决定执行哪一段",
        "en": "if tests its condition. The colon opens a block, and the spaces at the start of the next line put that instruction inside it. Python chooses the first true branch among if and elif, or takes else when none match. The last print is aligned with if, so every path reaches it.",
        "zh": "if 检查条件。冒号开始一个代码块，下一行行首的空格表示这条指令属于该代码块。Python 依次看 if 和 elif，只走第一个为真的分支；都不成立才走 else。最后一个 print 和 if 对齐，所以每条路径都会执行它。",
        "code": "samples = int(input())\nif samples == 0:\n    print(\"empty\")\nelif samples % 4 == 0:\n    print(\"full trays\")\nelse:\n    print(\"open tray\")\nprint(\"done\")",
        "input": "9\n",
        "output": "open tray\ndone",
        "tryEn": "Run with 0, 8 and 9. For input 0, both numerical tests would be true. Which message appears?",
        "tryZh": "输入 0、8、9 各运行一次。输入 0 时，前两个算式各自都为真，实际显示哪条消息？"
      },
      {
        "title": "Read characters by position",
        "titleZh": "按位置读取字符",
        "en": "A string stores characters in order. In code[0], the number inside square brackets is an index. Count from 0 at the beginning, or use -1 for the last character. len(code) counts the characters, so the last nonnegative index is len(code) - 1.",
        "zh": "字符串按顺序保存字符。code[0] 中方括号里的数字叫下标。第一位从 0 开始数，也可以用 -1 直接取最后一位。len(code) 给出字符总数，因此最后一位的非负下标是 len(code) - 1。",
        "code": "code = \"T07\"\nprint(code[0], code[2])\nprint(code[-1], len(code))",
        "input": "",
        "output": "T 7\n7 3",
        "tryEn": "Change code to \"A129\". Before running, predict which print will still select the last character.",
        "tryZh": "把 code 改成 \"A129\"。先猜两个 print 中，哪一个仍会取到最后一个字符。"
      }
    ],
    "check": {
      "en": "Predict the single output line before running the program.",
      "zh": "先不运行程序，写出它会输出的那一行。",
      "code": "n = 13\nn += 2\nif n % 4 == 3:\n    print(n // 4, n % 4)\nelse:\n    print(0)",
      "answer": "3 3",
      "why": "The update makes n equal to 15. Dividing 15 by 4 gives quotient 3 and remainder 3. The condition is true, so print displays the quotient and remainder separated by a space.",
      "whyZh": "更新后 n 等于 15。15 除以 4 的商为 3，余数也为 3。条件成立，所以 print 按顺序显示商和余数，中间有一个空格。"
    },
    "goals": "Write a program that reads input, stores a value and prints a calculation. Combine comparisons with and, or and not, then use if, elif and else to choose which lines run.",
    "goalsZh": "写一个能读入数据、保存数值、计算并输出结果的程序。用 and、or、not 组合判断条件，再用 if、elif、else 选择要执行的代码。"
  },
  {
    "unit": "L3",
    "intro": "A single name can hold a whole collection. Store stations, readings and labels, then visit their members with a loop to calculate a result.",
    "introZh": "一个变量名可以指向一整组数据。这一讲用不同容器保存站点、读数和标签，再通过循环逐项处理，算出结果。",
    "sections": [
      {
        "title": "Keep related fields in a tuple",
        "titleZh": "用元组保存一条记录",
        "en": "A tuple groups values in a fixed order. Here position 0 holds a station name and position 1 holds its reading. Writing two names on the left of = unpacks two values in that same order. A tuple inside another tuple can be indexed in two steps.",
        "zh": "元组把几个值按固定顺序放在一起。这里第 0 位是站名，第 1 位是读数。等号左边写两个名字，Python 会按顺序把两个值分别赋给它们，这叫解包。元组里还可以放元组，用两个下标逐层读取。",
        "code": "record = (\"North\", 17)\nname, value = record\nstations = (record, (\"South\", 20))\nprint(name, value)\nprint(stations[1][0])",
        "input": "",
        "output": "North 17\nSouth",
        "tryEn": "Change the last line to print(stations[0][1]). Work out the value after each pair of brackets.",
        "tryZh": "把最后一行改成 print(stations[0][1])。先写出第一对方括号取到的对象，再看第二对取到了什么。"
      },
      {
        "title": "Take part of a sequence",
        "titleZh": "用切片取出一段数据",
        "en": "A slice uses [start:stop:step]. Begin at start, advance by step, and stop before reaching stop. A missing step is 1. A negative step goes backwards; [::-1] starts at the last value and visits every value in reverse.",
        "zh": "切片的写法是 [开始:结束:步长]。先取开始位置，再每次按步长移动，到结束位置之前停下。省略步长时默认是 1。负步长表示往回走，[::-1] 会从最后一项走到第一项。",
        "code": "days = (\"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\")\nprint(days[1:4])\nprint(days[::2])\nprint(days[::-1])",
        "input": "",
        "output": "('Tue', 'Wed', 'Thu')\n('Mon', 'Wed', 'Fri')\n('Fri', 'Thu', 'Wed', 'Tue', 'Mon')",
        "tryEn": "Try days[-3:-1]. Mark the start and the excluded stop on the five day names first.",
        "tryZh": "试试 days[-3:-1]。先在五个星期名上标出开始位置和不取的结束位置。"
      },
      {
        "title": "Change a list one step at a time",
        "titleZh": "逐步修改列表",
        "en": "A list uses square brackets and allows an item to be replaced by index. append(x) adds one item at the end. del removes the item at a position, so later items shift left. Tuples preserve their positions and do not support assigning a replacement into a slot.",
        "zh": "列表用方括号表示，可以通过下标替换某一项。append(x) 把一项加在末尾。del 删除指定位置，后面的项会左移一格。元组的各位置固定，不能通过给某个下标赋值来替换成员。",
        "code": "queue = [\"red\", \"blue\"]\nqueue[1] = \"green\"\nqueue.append(\"gold\")\nprint(queue)\ndel queue[0]\nprint(queue[0])",
        "input": "",
        "output": "['red', 'green', 'gold']\ngreen",
        "tryEn": "Move the del line above the first print. What does the first print show now?",
        "tryZh": "把 del 那一行移到第一个 print 之前。第一个 print 现在显示什么？"
      },
      {
        "title": "Trace two names for one list",
        "titleZh": "追踪指向同一列表的两个名字",
        "en": "When view = queue runs, both names lead to the same list. A change through either name is visible through both. queue[:] makes a new outer list containing the current items. Draw one box for each list and an arrow from each name before predicting the output.",
        "zh": "执行 view = queue 之后，两个名字指向同一个列表。通过任一名字修改这个列表，从两个名字都能看到变化。queue[:] 会把当前的项放进一个新的外层列表。先为每个列表画一个框，再从各名字画箭头，就能跟踪输出。",
        "code": "queue = [\"red\", \"blue\"]\nview = queue\nsnapshot = queue[:]\nview[0] = \"gold\"\nprint(queue)\nprint(snapshot)",
        "input": "",
        "output": "['gold', 'blue']\n['red', 'blue']",
        "tryEn": "Change snapshot = queue[:] to snapshot = queue. Which output line changes?",
        "tryZh": "把 snapshot = queue[:] 改成 snapshot = queue。哪一行输出会变化？"
      },
      {
        "title": "Look up a value by its key",
        "titleZh": "用键查询字典",
        "en": "A dictionary stores key–value pairs inside braces. In {\"red\": 2}, \"red\" is a key and 2 is its value. Access counts[\"red\"] to read that value, or assign to counts[\"red\"] to replace it. get(key, default) supplies a starting value for a key that has not appeared yet.",
        "zh": "字典用花括号保存一组“键—值”。在 {\"red\": 2} 中，\"red\" 是键，2 是它对应的值。用 counts[\"red\"] 读取它，也可以对这个位置赋值来更新它。对一个还没有出现过的键，get(键, 默认值) 可提供初始数值。",
        "code": "counts = {\"red\": 2}\ncounts[\"red\"] += 1\ncolour = \"blue\"\ncounts[colour] = counts.get(colour, 0) + 1\nprint(counts[\"red\"], counts[\"blue\"])",
        "input": "",
        "output": "3 1",
        "tryEn": "Add \"blue\": 4 to the initial dictionary. What does get return, and what number is stored afterwards?",
        "tryZh": "在最初的字典中加入 \"blue\": 4。get 会读出几？更新之后存进去的又是几？"
      },
      {
        "title": "Use a set for distinct members",
        "titleZh": "用集合表示不重复的成员",
        "en": "A set keeps each distinct value once and has no numbered positions. add inserts a value and discard removes it if present. The operations a & b, a | b and a - b find shared members, all members and members only in a. sorted(...) arranges the result into a list so you can read it in a fixed order.",
        "zh": "集合中的每个值只保留一份，成员没有编号位置。add 加入一个值，discard 在值存在时删除它。a & b 取共有成员，a | b 取所有成员，a - b 取属于 a 却不属于 b 的成员。sorted(...) 将结果排成有固定阅读顺序的列表。",
        "code": "a = {\"red\", \"red\", \"blue\"}\nb = {\"blue\", \"gold\"}\na.add(\"red\")\na.discard(\"white\")\nprint(sorted(a & b))\nprint(sorted(a | b))\nprint(sorted(a - b))",
        "input": "",
        "output": "['blue']\n['blue', 'gold', 'red']\n['red']",
        "tryEn": "Try print(sorted(a ^ b)) to keep members present in exactly one set. Test whether a is contained in the union with print(a <= (a | b)).",
        "tryZh": "加上 print(sorted(a ^ b))，只保留恰好出现在一个集合里的成员。再用 print(a <= (a | b)) 判断 a 是否是并集的子集。"
      },
      {
        "title": "Trace a while loop",
        "titleZh": "逐轮跟踪 while 循环",
        "en": "while checks its condition before each run of the indented body. Record the value of remaining just before each print. Subtracting two changes the value used in the next check. When it reaches 1, the condition fails, and execution continues after the loop.",
        "zh": "while 在每轮开始前检查条件，成立才执行缩进的循环体。每次 print 之前记下 remaining 的值。减去 2 后，下一轮用的新值就变了。等 remaining 变为 1，条件不成立，程序从循环之后继续。",
        "code": "remaining = 5\nwhile remaining >= 2:\n    print(remaining)\n    remaining -= 2\nprint(\"left\", remaining)",
        "input": "",
        "output": "5\n3\nleft 1",
        "tryEn": "Set remaining to 1. How many times does Python enter the indented block?",
        "tryZh": "把 remaining 的初值改成 1。程序一共进入缩进的循环体几次？"
      },
      {
        "title": "Accumulate a result with for",
        "titleZh": "用 for 累积结果",
        "en": "for value in readings assigns each reading to value in turn. Keep the running total outside the loop so that it is initialized once. Start largest with the first reading of this nonempty list. After each iteration, largest holds the largest reading seen so far.",
        "zh": "for value in readings 依次把每个读数交给 value。把 total 的初值放在循环外面，这样只会初始化一次。这个列表至少有一项，就用第一项作为 largest 的初值。每轮结束时，largest 都代表到目前为止见过的最大值。",
        "code": "readings = [-5, -2, -8]\ntotal = 0\nlargest = readings[0]\nfor value in readings:\n    total += value\n    if value > largest:\n        largest = value\nprint(total, largest)",
        "input": "",
        "output": "-15 -2",
        "tryEn": "Start largest at 0 and run the same negative readings. What value is now incorrectly reported as the maximum?",
        "tryZh": "把 largest 的初值改成 0，再运行同一组负数。哪个从未出现过的值被误报为最大值？"
      },
      {
        "title": "Get numbers from range and positions from enumerate",
        "titleZh": "用 range 取数，用 enumerate 取位置",
        "en": "range(3) supplies 0, 1 and 2. With range(start, stop, step), choose the first value and the size of each jump. The stop value is excluded. A negative step counts down. enumerate(labels) supplies a pair, index and item, for each position. The two names after for unpack that pair.",
        "zh": "range(3) 依次给出 0、1、2。写成 range(开始, 结束, 步长) 时，可以指定从几开始、每次跳几格。结束值不包括在内。负步长会让数值递减。enumerate(labels) 给出每个位置的“下标、成员”二元组。for 后的两个名字把这对值分别接住。",
        "code": "for n in range(5, 0, -2):\n    print(n)\nlabels = [\"N\", \"E\", \"S\"]\nfor i, label in enumerate(labels):\n    print(i, label)",
        "input": "",
        "output": "5\n3\n1\n0 N\n1 E\n2 S",
        "tryEn": "Change the first stop to 1. Then replace enumerate(labels) with enumerate(labels, 1) to display positions starting at 1.",
        "tryZh": "把第一个 range 的结束值改成 1。再把 enumerate(labels) 改成 enumerate(labels, 1)，让显示的位置从 1 开始。"
      },
      {
        "title": "Process text and dictionary keys in a loop",
        "titleZh": "遍历文字并用字典计数",
        "en": "When the collection is a string, for takes one character at a time. Here each character chooses which counter to increase. After the loop, iterating over the dictionary visits its keys in insertion order. Use counts[key] to get each final count.",
        "zh": "for 遍历字符串时，每一轮取一个字符。这里用这个字符决定给哪个计数器加一。统计结束后，遍历字典会按键最初插入的顺序访问各个键。通过 counts[key] 读出对应的最终次数。",
        "code": "counts = {}\nfor ch in \"BABA\":\n    counts[ch] = counts.get(ch, 0) + 1\nfor key in counts:\n    print(key, counts[key])",
        "input": "",
        "output": "B 2\nA 2",
        "tryEn": "Try \"ABBAA\". Predict the key order as well as the counts.",
        "tryZh": "把字符串换成 \"ABBAA\"。分别预测输出的键顺序和次数。"
      },
      {
        "title": "Trace an inner loop from the start",
        "titleZh": "跟踪每一轮内层循环",
        "en": "A nested loop puts one loop inside another. The outer loop picks a row, then the inner loop runs through every column for that row. When the next row begins, range(3) starts again at 0. For two rows and three columns the inner print executes six times.",
        "zh": "嵌套循环就是循环里再放一个循环。外层先选一行，内层再走完这一行的所有列。换到下一行时，range(3) 又从 0 开始。两行三列，内层 print 总共执行六次。",
        "code": "for row in range(2):\n    for col in range(3):\n        print(row, col)",
        "input": "",
        "output": "0 0\n0 1\n0 2\n1 0\n1 1\n1 2",
        "tryEn": "Indent print(row, col) by only four spaces and put pass inside the inner loop. Trace the final col on each row.",
        "tryZh": "把 print(row, col) 改为只缩进四个空格，并在内层循环体里写 pass（什么也不做）。看每行结束时 col 停在几。"
      },
      {
        "title": "Skip a reading or stop reading",
        "titleZh": "跳过一项，或结束循环",
        "en": "continue skips the rest of the current iteration and checks the next item. break exits the nearest loop immediately. Here while True keeps taking one input line per pass. A zero ends the input, and a negative reading is skipped. Only positive readings reach the addition.",
        "zh": "continue 跳过这一轮剩下的指令，转去处理下一项。break 立刻退出它所在的最内层循环。这里用 while True 持续逐行读取输入。读到 0 时结束；负数则跳过，转去读下一行。只有正数会执行加法。",
        "code": "total = 0\nwhile True:\n    value = int(input())\n    if value == 0:\n        break\n    if value < 0:\n        continue\n    total += value\nprint(total)",
        "input": "4\n-2\n3\n0\n10\n",
        "output": "7",
        "tryEn": "Move the 0 to the last line of the input, after 10. Which extra reading now reaches the addition?",
        "tryZh": "把输入中的 0 移到 10 后面，让 0 成为最后一行。现在会多加进去哪个读数？"
      }
    ],
    "check": {
      "en": "Predict the single output line before running the program.",
      "zh": "先不运行程序，写出它会输出的那一行。",
      "code": "values = [3, 1, 4]\nhits = []\nfor i, value in enumerate(values):\n    if value < 3:\n        continue\n    hits.append(i)\nprint(hits)",
      "answer": "[0, 2]",
      "why": "enumerate gives (0, 3), (1, 1), then (2, 4). Only value 1 triggers continue. The append line stores the index on the other two passes.",
      "whyZh": "enumerate 依次给出 (0, 3)、(1, 1)、(2, 4)。只有读数 1 会触发 continue。其余两轮往 hits 里加入的是下标，所以列表里留下 0 和 2。"
    },
    "goals": "Choose a tuple, list, dictionary or set for a collection of data. Trace for and while loops, count matching items, and tell when a loop skips an item or stops.",
    "goalsZh": "按数据的用途选择元组、列表、字典或集合。手推 for 和 while 的每一轮，统计符合条件的项，判断循环何时跳过一项或结束。"
  },
  {
    "unit": "L4",
    "intro": "A string can be a label, a message or a whole record. Learn to read characters, rebuild text, format a report and use those operations in a cipher and a sorting algorithm.",
    "introZh": "标签、消息、整条记录都可以存成字符串。这一讲从读字符开始，再重组文字、排版报告，最后用同样的操作写出移位密码和排序算法。",
    "sections": [
      {
        "title": "Write quotes, line breaks and backslashes",
        "titleZh": "写出引号、换行和反斜杠",
        "en": "Single or double quotes enclose a string. A backslash introduces escapes such as \\n for a new line and \\t for a tab. Put r before the opening quote to keep backslashes as ordinary characters. Triple quotes let a literal span several source lines.",
        "zh": "字符串可用一对单引号或双引号括起来。反斜杠可以引出转义序列，例如 \\n 表示换行，\\t 表示制表符。在开引号前加 r 会保留反斜杠。三引号允许把多行文字直接写进同一个字符串。",
        "code": "print(\"Ada's 台灯\")\nprint(\"A\\nB\")\nprint(r\"A\\nB\")",
        "input": "",
        "output": "Ada's 台灯\nA\nB\nA\\nB",
        "tryEn": "Remove r from the last line. Now try print(\"\"\"A followed by a real line break, then B\"\"\"). Compare the outputs.",
        "tryZh": "删除最后一行的 r。再试试三引号：在 print(\"\"\"A 后按一次回车，下一行接着写 B\"\"\")。比较它们的输出。"
      },
      {
        "title": "Build text and test membership",
        "titleZh": "拼接文字并判断是否包含",
        "en": "Joining with + produces a new string, and multiplying a string by an integer repeats it. The expression part in text searches for consecutive characters. Python checks uppercase and lowercase letters separately. A for loop over text visits individual characters.",
        "zh": "用 + 可以拼出新字符串，用整数乘字符串会把它重复相应次数。part in text 查找一段连续出现的字符。大写和小写字母会分别匹配。用 for 遍历文字时，每轮取到一个字符。",
        "code": "tag = \"AB\" + \"-\" * 2 + \"C\"\nprint(tag)\nprint(\"B-\" in tag, \"bc\" in tag)\nfor ch in \"AB\":\n    print(ch * 2)",
        "input": "",
        "output": "AB--C\nTrue False\nAA\nBB",
        "tryEn": "Replace \"B-\" with \"-C\" and \"bc\" with \"AC\". Which pair of characters occurs side by side?",
        "tryZh": "把 \"B-\" 换成 \"-C\"，把 \"bc\" 换成 \"AC\"。哪一组字符在 tag 中相邻出现？"
      },
      {
        "title": "Read a slice in either direction",
        "titleZh": "正向和反向切片",
        "en": "An index picks one existing character; a slice builds a new string. For [start:stop:step], begin at start and move toward stop without taking the stop position. If a slice reaches past an end it uses the available characters. An index outside the string raises IndexError.",
        "zh": "下标取某个已经存在的字符，切片则生成一段新文字。[开始:结束:步长] 从开始位置出发，朝结束位置移动，不取结束位置。切片越过边界时只取现有的字符；单个下标越界会产生 IndexError。",
        "code": "word = \"PYTHON\"\nprint(word[-1], word[1:5:2])\nprint(word[4:1:-1])\nprint(word[3:40])",
        "input": "",
        "output": "N YH\nOHT\nHON",
        "tryEn": "Use word[1:4:-1] in the second line of output. The step goes left but the stop lies to the right. Predict the output length.",
        "tryZh": "把第二行输出中的切片改为 word[1:4:-1]。步长要求向左走，结束位置却在右侧。预测得到的字符串有几个字符。"
      },
      {
        "title": "Build a palindrome test that returns a result",
        "titleZh": "写一个会返回结果的回文判断",
        "en": "A function packages instructions under a name. def starts the definition; the name between its parentheses receives the argument when you call the function. To test a palindrome, compare the text with its reversal. return sends the answer back so another instruction can use it; print displays the value.",
        "zh": "函数把一段指令收在一个名字下面。def 开始定义，调用时传进来的值会交给圆括号里的参数。判断回文，可以把文字和倒序后的文字比较。return 将答案交还给调用处，让下一条指令使用；print 负责将值显示出来。",
        "code": "def is_mirror(text):\n    return text == text[::-1]\n\nanswer = is_mirror(\"level\")\nprint(answer)\nprint(is_mirror(\"lever\"))",
        "input": "",
        "output": "True\nFalse",
        "tryEn": "Test is_mirror(\"\") and is_mirror(\"Level\"). Then set text = text.lower() before return to compare after converting to lowercase.",
        "tryZh": "分别测试 is_mirror(\"\") 和 is_mirror(\"Level\")。再在 return 前加一行 text = text.lower()，把整段文字转成小写后再比较。"
      },
      {
        "title": "Compare at the first different character",
        "titleZh": "在第一个不同字符处比较",
        "en": "Python compares two strings from left to right by Unicode code point. The first different character settles their order. If all shared positions match, the shorter string comes first. ord(ch) gets the numeric code point of one character, and chr(number) turns a code point into its character.",
        "zh": "Python 从左到右按 Unicode 码点比较字符串。遇到第一对不同的字符，它们就决定顺序。如果共同部分完全一样，短字符串排在前面。ord(ch) 读出一个字符的码点，chr(数值) 则把码点转回字符。",
        "code": "print(\"box\" < \"boy\", \"A\" < \"a\")\nprint(\"lab\" < \"label\")\nprint(ord(\"A\"), chr(ord(\"A\") + 1))",
        "input": "",
        "output": "True True\nTrue\n65 B",
        "tryEn": "Try \"10\" < \"2\" and 10 < 2. For the text comparison, name the first two characters Python compares.",
        "tryZh": "分别测试 \"10\" < \"2\" 和 10 < 2。比较文字时，Python 最先比较的两个字符是什么？"
      },
      {
        "title": "Recognize a label with string methods",
        "titleZh": "用字符串方法识别标签",
        "en": "A method is called after a dot, as in label.startswith(\"RX\"). startswith and endswith test the edges, while find returns the index of the first match or -1 when it is absent. isalpha, isdecimal and isalnum test a nonempty string for letters, decimal digits, or letters and numbers respectively. count counts non-overlapping matches.",
        "zh": "字符串后加点号就能调用它的方法，例如 label.startswith(\"RX\")。startswith、endswith 检查开头和末尾；find 返回第一次匹配的下标，找不到时返回 -1。isalpha、isdecimal、isalnum 分别检查非空字符串是否全为字母、十进制数字，或字母数字。count 会统计互不重叠的匹配次数。",
        "code": "label = \"RX-004\"\nprint(label.startswith(\"RX\"), label.endswith(\"4\"))\nprint(label.find(\"-\"), label.find(\"Z\"))\nprint(label[:2].isalpha(), label[3:].isdecimal())\nprint(label.isalnum(), label.count(\"0\"))",
        "input": "",
        "output": "True True\n2 -1\nTrue True\nFalse 2",
        "tryEn": "Change the label to \"RX-0A4\". Predict which tests change and how many zeros remain.",
        "tryZh": "把标签改成 \"RX-0A4\"。先猜哪些判断改变，字符串里还剩几个 0。"
      },
      {
        "title": "Remove edge characters and replace text",
        "titleZh": "清理两端字符并替换文字",
        "en": "Strings keep their characters when a method returns a changed copy. strip() removes whitespace from both ends. With an argument, strip removes any of the listed characters repeatedly from either end. replace(old, new) substitutes matching text wherever it occurs.",
        "zh": "调用字符串方法得到新文字之后，原字符串仍然保留原有字符。strip() 去掉两端空白，带参数时则从两端反复去掉参数中列出的任意字符。replace(旧文字, 新文字) 会在整段文字中替换匹配项。",
        "code": "raw = \"  xyyBoxyx  \"\nclean = raw.strip()\nprint(clean)\nprint(clean.strip(\"xy\"))\nprint(clean.replace(\"Box\", \"Tray\"))\nprint(raw == clean)",
        "input": "",
        "output": "xyyBoxyx\nBo\nxyyTrayyx\nFalse",
        "tryEn": "Change \"Box\" in raw to \"Lab\". Trace strip(\"xy\") inward from each end. Which final letter now stops the stripping?",
        "tryZh": "把 raw 中的 \"Box\" 改成 \"Lab\"。从两端向中间跟踪 strip(\"xy\")，这次右边遇到哪个字母时停下？"
      },
      {
        "title": "Rebuild a string with slices or join",
        "titleZh": "用切片或 join 重组文字",
        "en": "To replace a character, join the unchanged prefix, the new character and the unchanged suffix. A second approach is to turn the text into a list, edit a position and join the parts back together. The string before .join(...) is inserted between adjacent pieces. split() with no argument separates words at runs of whitespace.",
        "zh": "替换一个字符时，可以将原来的前段、新字符和原来的后段拼起来。也可以先把字符串变成列表，按位置编辑，再用 join 合回文字。.join(...) 前面的字符串会插在相邻两项之间。不带参数的 split() 按连续空白分出各个单词。",
        "code": "tag = \"X1B\"\nprint(tag[:1] + \"2\" + tag[2:])\nletters = list(tag)\nletters[1] = \"3\"\nprint(\"\".join(letters), tag)\nprint(\"-\".join(\"  red   blue \".split()))",
        "input": "",
        "output": "X2B\nX3B X1B\nred-blue",
        "tryEn": "Change the first expression to tag[:1] + tag[2:] and the join separator from \"-\" to \"/\". Predict both changes.",
        "tryZh": "把第一个表达式改为 tag[:1] + tag[2:]，再将最后一行 join 的分隔符从 \"-\" 换成 \"/\"。分别预测这两处变化。"
      },
      {
        "title": "Line up a small report with f-strings",
        "titleZh": "用 f-string 对齐一行报告",
        "en": "An f-string starts with f before its opening quote. Python evaluates the expression inside each pair of braces. After a colon, <5 left-aligns text in a field at least five characters wide, 03d prints an integer in at least three places padded with zeros, and .2f rounds the displayed number to two decimal places.",
        "zh": "f-string 在开引号前写 f。每对花括号里的表达式会先求值。冒号后的 <5 表示在至少五个字符宽的栏里左对齐，03d 表示整数至少占三位、左边补零，.2f 表示显示时保留两位小数。",
        "code": "name = \"N\"\ncount = 7\ntotal = 5\nprint(f\"|{name:<5}|{count:03d}|{total / 3:.2f}|\")",
        "input": "",
        "output": "|N    |007|1.67|",
        "tryEn": "Replace <5 with >5, and .2f with .1f. The vertical bars show exactly where spaces land.",
        "tryZh": "把 <5 换成 >5，把 .2f 换成 .1f。看竖线之间的空格移到了哪里。"
      },
      {
        "title": "Rotate the alphabet to encode a message",
        "titleZh": "旋转字母表给消息编码",
        "en": "A Caesar shift replaces each letter by a fixed number of positions around the alphabet. For key 2, rotate the alphabet by joining its slice from index 2 with its first two letters. alphabet.index(ch) gives a letter’s position. Read that same position from shifted and append the resulting character to result with +=.",
        "zh": "凯撒移位会把每个字母沿字母表移动相同的格数，走到末尾再绕回开头。密钥为 2 时，把从下标 2 开始的后段接在前面，再接上开头两个字母。alphabet.index(ch) 找到原字母的下标。用这个下标从 shifted 取出替换字母，再以 += 把它接到 result 的末尾。",
        "code": "alphabet = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\"\nkey = 2\nshifted = alphabet[key:] + alphabet[:key]\nresult = \"\"\nfor ch in \"AZ!\":\n    if ch in alphabet:\n        result += shifted[alphabet.index(ch)]\n    else:\n        result += ch\nprint(result)",
        "input": "",
        "output": "CB!",
        "tryEn": "Try keys 0, 1 and 25. For key 1, explain where Z goes. If the key is unknown, run the same loop once for each key in range(26).",
        "tryZh": "试试密钥 0、1、25。密钥为 1 时，解释 Z 会去哪里。若密钥未知，可以让密钥依次取 range(26) 中的值，每次运行同一段转换循环。"
      },
      {
        "title": "Insert names in sorted order",
        "titleZh": "把名字插入已有顺序",
        "en": "Keep a list that is already sorted. For each new name, move an index past names that come before it, then use insert(index, name) to place it there. Check the index against len(ordered) first; and checks its right side only when the left side is true. An index equal to the length inserts at the end.",
        "zh": "始终维护一张已经排好序的名单。拿到新名字时，用下标跳过应该排在它前面的名字，再用 insert(下标, 名字) 把它放到该处。先检查下标是否小于 len(ordered)，因为 and 只有在左边为真时才检查右边。下标等于长度时，插入位置就是末尾。",
        "code": "ordered = []\nfor name in [\"Mei\", \"Ada\", \"Zoe\"]:\n    i = 0\n    while i < len(ordered) and ordered[i] <= name:\n        i += 1\n    ordered.insert(i, name)\n    print(ordered)",
        "input": "",
        "output": "['Mei']\n['Ada', 'Mei']\n['Ada', 'Mei', 'Zoe']",
        "tryEn": "Add \"Bo\" to the input. Predict the insertion index. Check the final list against sorted([\"Mei\", \"Ada\", \"Zoe\", \"Bo\"]).",
        "tryZh": "在输入名单末尾加入 \"Bo\"。预测它会插入哪个下标，再用 sorted([\"Mei\", \"Ada\", \"Zoe\", \"Bo\"]) 检查最终结果。"
      }
    ],
    "check": {
      "en": "Predict the single output line before running the program.",
      "zh": "先不运行程序，写出它会输出的那一行。",
      "code": "tag = \" Aba \"\nword = tag.strip().lower()\nprint(word[::2], word == word[::-1])",
      "answer": "aa True",
      "why": "strip removes the two outer spaces, then lower gives aba. Indices 0 and 2 both contain a, so the stepped slice is aa. Reversing aba gives aba again.",
      "whyZh": "strip 去掉两端空格，再经 lower 转为 aba。下标 0 和 2 的字符都是 a，所以步长为 2 的切片得到 aa。aba 倒过来仍是 aba，比较结果为 True。"
    },
    "goals": "Extract characters with indices and slices, clean text, and align a formatted report. Use character codes for a letter shift, compare names and place a new name in sorted order.",
    "goalsZh": "用下标和切片取字符，清理文本，把报告排成对齐的列。用字符编码移动字母，比较名字的先后，把新名字插入有序名单。"
  },
  {
    "unit": "L5",
    "intro": "Two names can point to one list. Follow what each name sees, then use tuples, lists and a text file to build a small data log.",
    "introZh": "两个变量名可以指向同一个列表。先跟踪每个名字看到的内容，再用元组、列表和文本文件做一份小日志。",
    "sections": [
      {
        "title": "Give one list two names",
        "titleZh": "一个列表，两个名字",
        "en": "Python stores the list [4, 8] as an object. saved = readings gives the existing list a second name. readings[0] = 9 replaces its first item, so saved also shows 9. == compares contents, while is checks whether both names point to the same object.",
        "zh": "Python 把 [4, 8] 这个列表存为一个对象。saved = readings 给这个列表起了第二个名字。readings[0] = 9 替换了它的第一项，因此从 saved 也能看到 9。== 比较内容，is 判断两个名字是否指向同一个对象。",
        "code": "readings = [4, 8]\nsaved = readings\nreadings[0] = 9\nprint(saved)\nprint(readings == [9, 8], readings is saved)",
        "input": "",
        "output": "[9, 8]\nTrue True",
        "tryEn": "Change saved = readings to saved = readings[:]. This slice copies the outer list. Predict which of the two True values changes.",
        "tryZh": "把 saved = readings 改成 saved = readings[:]。这个切片会复制外层列表。预测两个 True 中哪一个会改变。"
      },
      {
        "title": "Keep an immutable value",
        "titleZh": "不可变值与重新赋值",
        "en": "A string keeps its original characters. upper() returns an uppercase string, so keep its result when you want to use it. A tuple holds a fixed sequence of items. The comma makes (4,) a one-item tuple. Joining (9,) with += binds points to a longer tuple while original still refers to the first one.",
        "zh": "字符串的字符不能原地修改。upper() 返回大写字符串；想用转换结果，就把它存起来。元组的位置固定，(4,) 里的逗号让它成为只有一个元素的元组。用 += 拼上 (9,) 后，points 指向更长的元组，original 仍指向起初的元组。",
        "code": "name = \"bay\"\nlabel = name.upper()\npoints = (4,)\noriginal = points\npoints += (9,)\nprint(name, label)\nprint(original, points)",
        "input": "",
        "output": "bay BAY\n(4,) (4, 9)",
        "tryEn": "Use lists [4] and [9] in place of the tuples. The list version of += extends the same object. What will original contain?",
        "tryZh": "把两个元组换成列表 [4] 和 [9]。列表的 += 会扩展同一个对象。original 里会有什么？"
      },
      {
        "title": "Unpack a pair",
        "titleZh": "把一对数据拆开",
        "en": "The comma in point = 3, 7 packs two values into a tuple. x, y = point unpacks its first value into x and its second into y. Two ordinary target names need exactly two items. Python evaluates the right side before assigning the left, which also lets you swap the names. In a call, *point supplies the two tuple items as separate arguments.",
        "zh": "point = 3, 7 里的逗号把两个值打包成元组。x, y = point 把第一项给 x，第二项给 y。左边是两个普通名字时，右边必须恰好有两项。Python 先算右侧，再给左侧赋值，因此也能用它交换两个变量。在调用中，*point 把元组里的两项作为两个独立实参传入。",
        "code": "point = 3, 7\nx, y = point\nx, y = y, x\nprint(x, y)\nprint(point)\nprint(*point)",
        "input": "",
        "output": "7 3\n(3, 7)\n3 7",
        "tryEn": "Change point to (3, 7, 2). Run once and locate the unpacking error. Then give the third item its own name in the unpacking line.",
        "tryZh": "把 point 改为 (3, 7, 2)，运行一次，找出解包报错的位置。然后在解包那一行给第三项也分配一个名字。"
      },
      {
        "title": "Summarise a table row by row",
        "titleZh": "逐行汇总一张数据表",
        "en": "Each tuple below is one measurement. On each loop, for site, value in records unpacks one row. append puts its number at the end of values. A set keeps each distinct site once. With at least one record, min and max find the two extremes, and len(sites) counts distinct sites.",
        "zh": "下面每个元组是一条测量记录。for site, value in records 每轮拆开一条记录。append 将读数加在 values 末尾。集合里每个不同的站名只占一项。有至少一条记录时，min 和 max 给出最小值和最大值，len(sites) 给出不同站点的个数。",
        "code": "records = [(\"A\", 12), (\"B\", 9), (\"A\", 14)]\nvalues = []\nsites = set()\nfor site, value in records:\n    values.append(value)\n    sites.add(site)\nprint(min(values), max(values), len(sites))",
        "input": "",
        "output": "9 14 2",
        "tryEn": "Add (\"A\", 6). Predict which of the three summary numbers changes.",
        "tryZh": "加入 (\"A\", 6)。预测三个汇总数字中哪一个会改变。"
      },
      {
        "title": "Add or remove list items",
        "titleZh": "给列表增加和删除元素",
        "en": "append adds its entire argument as one item. extend visits the supplied sequence and adds its items one by one. Indexes start at zero. del uses an index, while remove(value) deletes the first item equal to value. After deletion, later items shift one position left.",
        "zh": "append 把整个实参作为一项加入。extend 则逐一加入序列里的每一项。下标从 0 开始。del 按下标删除，remove(value) 删除第一个等于 value 的元素。删除后，后面的元素向左移动一位。",
        "code": "a = [3, 1]\na.append([4, 5])\nprint(a)\nb = [3, 1]\nb.extend([4, 5])\ndel b[0]\nb.remove(4)\nprint(b)",
        "input": "",
        "output": "[3, 1, [4, 5]]\n[1, 5]",
        "tryEn": "Change b.extend([4, 5]) to b.extend([4, 4, 5]). Count how many copies of 4 survive remove(4).",
        "tryZh": "把 b.extend([4, 5]) 改成 b.extend([4, 4, 5])。看看一次 remove(4) 后还剩几个 4。"
      },
      {
        "title": "Choose where the sorted list lives",
        "titleZh": "排序结果放在哪里",
        "en": "sorted(values) builds a new list in ascending order. values.sort() instead rearranges the list held by values, and its return value is None. When reading an expression such as result = values.sort(), track both the contents of values and the object assigned to result.",
        "zh": "sorted(values) 建立一个按升序排列的新列表。values.sort() 直接重排 values 现有的列表，返回值为 None。看到 result = values.sort()，要分别追踪 values 的内容和赋给 result 的对象。",
        "code": "values = [6, 2, 4]\nordered = sorted(values)\nprint(values, ordered)\nresult = values.sort()\nprint(values, result)",
        "input": "",
        "output": "[6, 2, 4] [2, 4, 6]\n[2, 4, 6] None",
        "tryEn": "Pass reverse=True to sorted. Before running, write down both lists on the first output line.",
        "tryZh": "给 sorted 加上 reverse=True。先写出第一行将显示的两个列表，再运行。"
      },
      {
        "title": "Copy an outer list",
        "titleZh": "复制嵌套列表的外层",
        "en": "A list can hold other lists. grid[:] makes a fresh outer list and copies the references in its slots. Both outer lists initially point to the same row at index 0. Changing a number inside that row is visible from both lists. Replacing the whole row in one outer list only changes that slot.",
        "zh": "列表可以装其他列表。grid[:] 创建新外层列表，并把原来各位置的引用复制过去。两个外层列表起初指向同一条第 0 行。修改这一行里的数字，两边都能看到。只替换一个外层列表中的整行，则只改了它自己的那个位置。",
        "code": "grid = [[1, 2], [3, 4]]\nsnapshot = grid[:]\nsnapshot[0][1] = 8\nsnapshot[1] = [0, 0]\nprint(grid)\nprint(snapshot)",
        "input": "",
        "output": "[[1, 8], [3, 4]]\n[[1, 8], [0, 0]]",
        "tryEn": "Replace snapshot[0][1] = 8 with snapshot[0] = [1, 8]. Predict the first output line.",
        "tryZh": "把 snapshot[0][1] = 8 改成 snapshot[0] = [1, 8]。预测第一行输出。"
      },
      {
        "title": "Filter first, then transform",
        "titleZh": "先筛选，再变换",
        "en": "Read the comprehension from its for clause. Take a value from raw, check the if condition, and add value * 2 to the new list only when the check succeeds. It performs the same operations as the longer loop. Building a fresh list also avoids skipping neighbouring values by removing them during a traversal.",
        "zh": "列表推导式从 for 部分开始读。先从 raw 拿一个值，检查 if 条件，满足时才把 value * 2 放进新列表。下面两种写法执行的步骤相同。重新建立列表，也能避免遍历时删除元素导致相邻项漏检。",
        "code": "raw = [-1, 0, 3, 5]\nkept = []\nfor value in raw:\n    if value >= 0:\n        kept.append(value * 2)\nshort = [value * 2 for value in raw if value >= 0]\nprint(kept, short)",
        "input": "",
        "output": "[0, 6, 10] [0, 6, 10]",
        "tryEn": "Change >= to > only in the comprehension. Which input makes its result differ from the loop?",
        "tryZh": "只把推导式里的 >= 改成 >。哪个输入值会使两种写法的结果不同？"
      },
      {
        "title": "Repeat a random experiment",
        "titleZh": "复现一次随机实验",
        "en": "import random makes Python’s random module available. seed(7) selects a starting state. randint(1, 6) draws an integer with both endpoints included, and choice draws one item from a sequence. Resetting the same seed and repeating the calls in the same order reproduces the pair.",
        "zh": "import random 导入 Python 的随机数模块。seed(7) 设定起始状态。randint(1, 6) 在含两个端点的范围内抽整数，choice 从序列里选一项。重新设置同一个种子，再按同一顺序调用，就能复现这对结果。",
        "code": "import random\n\nrandom.seed(7)\nfirst = random.randint(1, 6), random.choice([\"A\", \"B\"])\nrandom.seed(7)\nrepeat = random.randint(1, 6), random.choice([\"A\", \"B\"])\nprint(first)\nprint(first == repeat)",
        "input": "",
        "output": "(3, 'A')\nTrue",
        "tryEn": "Change both seeds to 5. Check whether the drawn pair changes and whether the equality check changes.",
        "tryZh": "把两个种子都改为 5。看看抽得的一对值会不会变，再看相等判断会不会变。"
      },
      {
        "title": "Write, append and read text",
        "titleZh": "写入、追加和读取文本",
        "en": "open gives you a file object. The mode 'w' creates a file or erases its old contents; 'a' writes at its end. A with block closes the file when its indented lines finish. write saves exactly the characters you give it, so include a newline to start the next record on a new line. Open with 'r' and call read() to retrieve the text.",
        "zh": "open 返回一个文件对象。模式 'w' 会创建文件或清空已有内容，'a' 会在末尾写入。with 块里的缩进行执行完后会自动关闭文件。write 原样写入给它的字符；想让下一条记录另起一行，要自己加换行符。用 'r' 打开再调用 read()，就能取出文本。",
        "code": "with open(\"sites.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"west\\n\")\nwith open(\"sites.txt\", \"a\", encoding=\"utf-8\") as f:\n    f.write(\"east\\n\")\nwith open(\"sites.txt\", \"r\", encoding=\"utf-8\") as f:\n    print(f.read().splitlines())",
        "input": "",
        "output": "['west', 'east']",
        "tryEn": "Replace 'a' with 'w' in the second block. Which site remains in the file?",
        "tryZh": "把第二个块中的 'a' 改成 'w'。文件里还会剩下哪个站名？"
      },
      {
        "title": "Read a numerical log one line at a time",
        "titleZh": "逐行读取数值日志",
        "en": "Iteration over an open file visits one line at a time. A line contains text, and usually its ending newline too. strip() removes surrounding whitespace. The if skips a line whose stripped text is empty; int then turns each remaining line into an integer that sum can add.",
        "zh": "遍历打开的文件时，每轮取得一行文本，通常还带着行尾换行符。strip() 去掉两端空白。if 跳过处理后为空的行，int 再把其他行转成整数，交给 sum 求和。",
        "code": "with open(\"meter.txt\", \"w\", encoding=\"utf-8\") as log:\n    log.write(\" 8\\n\\n12\\n\")\nnumbers = []\nwith open(\"meter.txt\", encoding=\"utf-8\") as log:\n    for line in log:\n        text = line.strip()\n        if text:\n            numbers.append(int(text))\nprint(numbers, sum(numbers))",
        "input": "",
        "output": "[8, 12] 20",
        "tryEn": "Insert the text 0\\n immediately before 12 in the file string. Predict both the list and the sum.",
        "tryZh": "在文件字符串里的 12 前插入文本 0\\n。分别预测列表和总和。"
      }
    ],
    "check": {
      "en": "Predict both printed lists.",
      "zh": "预测打印出的两个列表。",
      "code": "rows = [[\"a\"], [\"b\"]]\ncopy = rows[:]\ncopy[0].append(\"c\")\ncopy[1] = [\"d\"]\nprint(rows, copy)",
      "answer": "[['a', 'c'], ['b']] [['a', 'c'], ['d']]",
      "why": "The first row is shared, so appending c changes it in both views. The assignment at index 1 changes only the slot of copy.",
      "whyZh": "第一行由两个外层列表共享，追加 c 后两边都看到变化。对下标 1 赋值只替换了 copy 中的那个位置。"
    },
    "goals": "Unpack tuples, update a list and predict what its copies contain. Filter records, repeat a random experiment, then write, append and read rows in a text file.",
    "goalsZh": "拆开元组，更新列表，判断复制出来的列表包含什么。筛选记录，复现随机实验，再把数据逐行写入、追加到文本文件并读回来。"
  },
  {
    "unit": "L6",
    "intro": "Turn a calculation into a function you can call with new data. Trace where the result goes and use test cases to check each decision.",
    "introZh": "把一次计算写成函数，换一组数据也能直接调用。跟踪结果返回到哪里，再用测试用例检查每个判断。",
    "sections": [
      {
        "title": "Define a function and call it",
        "titleZh": "定义函数，再调用它",
        "en": "def introduces a function name. The names inside the parentheses are parameters, places that receive values from a call. The colon starts the body, and its lines are indented by four spaces here. Python saves this definition. At travel(6, 3), it sets speed to 6 and hours to 3, runs the body and sends 18 back to print.",
        "zh": "def 后面是函数名。括号内的名字是形参，调用时用来接收数值。冒号引出函数体，这里每行缩进四个空格。Python 先保存定义。执行 travel(6, 3) 时，speed 得到 6，hours 得到 3，函数体开始执行，再把 18 返回给 print。",
        "code": "def travel(speed, hours):\n    return speed * hours\n\nprint(travel(6, 3))\nprint(travel(2, 5))",
        "input": "",
        "output": "18\n10",
        "tryEn": "Change the first call to travel(6, 0). Which line of output changes?",
        "tryZh": "把第一次调用改成 travel(6, 0)。哪一行输出会改变？"
      },
      {
        "title": "A displayed value and a returned value",
        "titleZh": "打印出来和返回给调用者",
        "en": "print writes text to the console. return passes an object back to the expression that called the function and ends that call. Here show_total displays 12. Reaching the end of its body gives the caller the special value None. get_total returns a number that the caller can use in arithmetic.",
        "zh": "print 把文字写到控制台。return 把一个对象交回调用它的位置，并结束本次调用。show_total 会显示 12，随后执行到函数末尾，调用者收到特殊值 None。get_total 返回数字，调用者可以继续拿它计算。",
        "code": "def show_total(a, b):\n    print(a + b)\n\ndef get_total(a, b):\n    return a + b\n\nshown = show_total(8, 4)\nprint(shown)\nprint(get_total(8, 4) * 2)",
        "input": "",
        "output": "12\nNone\n24",
        "tryEn": "Inside show_total, add return a + b below its print. Predict all three outputs.",
        "tryZh": "在 show_total 的 print 下面加一行 return a + b，保持相同缩进。预测全部三行输出。"
      },
      {
        "title": "Pass inputs by position or name",
        "titleZh": "按位置或名称传入实参",
        "en": "In a positional call, Python fills the parameter slots from left to right. A keyword such as fee=2 chooses a slot by name. The default fee=1 in the definition supplies the fee when the call omits it. In this ordinary parameter list, required parameters come before those with defaults.",
        "zh": "按位置调用时，Python 从左到右填写形参。fee=2 这类关键字实参按名字选择位置。定义里的默认值 fee=1 会在调用者省略费用时补上。在这种普通形参列表中，必填形参写在带默认值的形参前面。",
        "code": "def bill(units, price, fee=1):\n    return units * price + fee\n\nprint(bill(3, 4))\nprint(bill(price=4, fee=2, units=3))",
        "input": "",
        "output": "13\n14",
        "tryEn": "Change only the default fee to 5. Which call still returns 14, and why?",
        "tryZh": "只把默认费用改成 5。哪一次调用还会返回 14？为什么？"
      },
      {
        "title": "Follow a call inside another call",
        "titleZh": "拆开嵌套调用与类型提示",
        "en": "The hint text: str describes the expected input type and -> int the intended result type. Python still needs int(text) to convert the text. input() reads one line as a string. In double(read_count(input())), first read the line, then convert it to an integer, then double the integer.",
        "zh": "text: str 是形参类型提示，-> int 是返回类型提示。把文本转成整数仍要执行 int(text)。input() 读取一行字符串。遇到 double(read_count(input()))，先读取一行，再把它转成整数，最后把整数翻倍。",
        "code": "def read_count(text: str) -> int:\n    return int(text)\n\ndef double(value):\n    return value * 2\n\nprint(double(read_count(input())))",
        "input": "6\n",
        "output": "12",
        "tryEn": "Keep the input at 6 and replace return int(text) with return text. Predict why the next run prints 66.",
        "tryZh": "输入保留 6，把 return int(text) 改为 return text。预测为什么下一次会打印 66。"
      },
      {
        "title": "Return a summary as a pair",
        "titleZh": "用元组返回两个结果",
        "en": "A function can group two answers into one tuple. The comma in return distance, minutes packs them in that order. The caller can store the tuple under one name or unpack it into two names. Name the receiving variables in the same order as the returned quantities.",
        "zh": "函数可以把两个答案装进一个元组。return distance, minutes 里的逗号按顺序把里程、分钟数打包。调用者可以用一个变量保存整个元组，也可以用两个变量分别接收。给接收结果的变量命名时，要按实际返回顺序来。",
        "code": "def leg(speed, hours):\n    distance = speed * hours\n    minutes = hours * 60\n    return distance, minutes\n\nkm, duration = leg(5, 3)\nprint(km, duration)",
        "input": "",
        "output": "15 180",
        "tryEn": "Reverse the return order but leave the call unchanged. What number gets stored in km?",
        "tryZh": "交换 return 后两个值的顺序，保留外面的调用。哪个数字会存进 km？"
      },
      {
        "title": "Place return in a search",
        "titleZh": "在查找程序里放对 return",
        "en": "A successful return exits the entire function, even from inside a loop. To report the first odd number, return as soon as % 2 gives remainder 1. An even value tells you to try the next item. Only a completed loop establishes that the input has no odd number, so return None belongs after the loop.",
        "zh": "即使在循环内部，执行 return 也会结束整个函数。找第一个奇数时，% 2 的余数为 1 就可以立即返回。遇到偶数还要检查下一项。只有遍历结束才能确定没有奇数，因此 return None 要放在循环外面。",
        "code": "def first_odd(values):\n    for value in values:\n        if value % 2 == 1:\n            return value\n    return None\n\nprint(first_odd([2, 4, 7]))\nprint(first_odd([]))",
        "input": "",
        "output": "7\nNone",
        "tryEn": "Indent return None one level so it is inside the loop, aligned with if. Which previous answer becomes None?",
        "tryZh": "把 return None 再缩进一级，放进循环内并与 if 对齐。哪个原有答案会变成 None？"
      },
      {
        "title": "Give each stage one job",
        "titleZh": "把任务分成可以串联的步骤",
        "en": "Start with what goes in and what comes out of each stage. Here parse receives a line of text and returns a list of numbers. mean takes that list and returns its arithmetic average. main coordinates the calls, and the last line starts it. You can change the arithmetic inside mean while keeping its input and output usable by the other stages.",
        "zh": "先为每一步确定输入和输出。parse 接收一行文本，返回一个数字列表。mean 接收列表，返回算术平均值。main 负责依次调用这些步骤，最后一行才启动 main。只要 mean 仍能接收同样的输入并返回可用结果，就能单独修改它的计算方法。",
        "code": "def parse(line):\n    return [int(word) for word in line.split()]\n\ndef mean(numbers):\n    return sum(numbers) / len(numbers)\n\ndef main():\n    values = parse(input())\n    print(mean(values))\n\nmain()",
        "input": "3 5 10\n",
        "output": "6.0",
        "tryEn": "Try the input 2 4 18. Then try an empty line and identify which operation cannot compute an average of zero readings.",
        "tryZh": "先把输入换成 2 4 18，再试一个空行。找出没有任何读数时，哪一步无法算出平均值。"
      },
      {
        "title": "Keep local and global names separate",
        "titleZh": "追踪局部变量和全局变量",
        "en": "Each call has its own local names, including its parameters. The parameter level starts with the supplied value 4, then gets the local value 7. The name level in the main script keeps its own binding until the final assignment. A function can read a module-level name; a global declaration inside a function directs assignment to that module-level name.",
        "zh": "每次调用都有自己的局部变量，形参也属于局部变量。形参 level 开始接收 4，随后在函数内得到 7。主程序的 level 在最后一次赋值前一直保留原值。函数可以读取模块级的全局变量；在函数内用 global 声明一个名字后，对它赋值会改动模块级的那个变量。",
        "code": "level = 4\n\ndef raised(level):\n    level += 3\n    return level\n\nnew_level = raised(level)\nprint(level, new_level)\nlevel = new_level\nprint(level)",
        "input": "",
        "output": "4 7\n7",
        "tryEn": "Call raised(level) once more just before the final print, on a line by itself. Does level change when nobody saves the return value?",
        "tryZh": "在最后一行 print 前单独再写一次 raised(level)。如果没人保存返回值，level 会改变吗？"
      },
      {
        "title": "Pass an action into a function",
        "titleZh": "把一个函数传给另一个函数",
        "en": "A function name on its own refers to the function object. apply_twice accepts that object under the local name action. Calling action(value) applies it once; the outer call applies it to that first result. A function that accepts or returns another function is called a higher-order function.",
        "zh": "函数名单独出现时，表示函数对象本身。apply_twice 接收这个对象，在内部称它为 action。action(value) 先作用一次，外层调用再对这个结果作用一次。接收函数或返回函数的函数叫作高阶函数。",
        "code": "def add_three(value):\n    return value + 3\n\ndef apply_twice(action, value):\n    return action(action(value))\n\nprint(apply_twice(add_three, 4))",
        "input": "",
        "output": "10",
        "tryEn": "Change add_three to multiply its input by 3 instead. Trace the inner call and outer call separately.",
        "tryZh": "把 add_three 的计算改成把输入乘以 3。分别写出内层调用和外层调用的结果。"
      },
      {
        "title": "Request results from map",
        "titleZh": "从 map 逐个取出结果",
        "en": "map(int, words) prepares an iterator that will convert each string on request. next takes one result and advances the iterator. list takes every remaining result, leaving it exhausted. A new map over the same words starts again at the first item.",
        "zh": "map(int, words) 建立一个迭代器，每次索取结果时才会转换一个字符串。next 取出一项，迭代器向前移动。list 取走剩余全部结果，这个迭代器随之耗尽。对同一组 words 重新建立 map，就能从第一项重新开始。",
        "code": "words = [\"7\", \"8\", \"9\"]\nnumbers = map(int, words)\nprint(next(numbers))\nprint(list(numbers))\nprint(list(numbers))",
        "input": "",
        "output": "7\n[8, 9]\n[]",
        "tryEn": "Replace the last list(numbers) with list(map(int, words)). Which items return?",
        "tryZh": "把最后一行里的 list(numbers) 改成 list(map(int, words))。这次会得到哪些项？"
      },
      {
        "title": "Pair inputs with a short function",
        "titleZh": "用短函数配对处理两组数据",
        "en": "lambda x, y: x * y creates a function with two parameters and returns the value of the expression after the colon. map can supply these two parameters from two sequences. Its first call uses 2 and 10, and its next uses 3 and 4. It stops when the shorter input runs out.",
        "zh": "lambda x, y: x * y 创建一个接收两个形参的函数，把冒号后表达式的值返回。map 可以从两个序列中各取一项，传给这两个形参。第一次使用 2 和 10，第二次使用 3 和 4。一旦较短的序列用完，就停止配对。",
        "code": "hours = [2, 3, 5]\nrates = [10, 4]\ncosts = map(lambda x, y: x * y, hours, rates)\nprint(list(costs))",
        "input": "",
        "output": "[20, 12]",
        "tryEn": "Append 6 to rates. Which new pair will be evaluated and what is its product?",
        "tryZh": "在 rates 末尾加上 6。新增的一对数是什么？乘积是多少？"
      },
      {
        "title": "Test both sides of a boundary",
        "titleZh": "用边界值检验判断",
        "en": "Write down the expected answer before executing the function. For a valid interval from 3 through 5, choose a point inside it, both endpoints, and values just outside it. assert checks a condition and raises AssertionError on the first false one. Reaching the final print means every check in this table passed.",
        "zh": "先写出预期结果，再运行函数。有效区间是 3 到 5 且含端点时，选一个内部值、两个端点，以及刚刚越界的值。assert 检查条件，遇到第一个 False 就触发 AssertionError。执行到最后的 print，表示表中每个检查都通过了。",
        "code": "def in_band(value):\n    return 3 <= value <= 5\n\ncases = [(2, False), (3, True), (4, True), (5, True), (6, False)]\nfor value, expected in cases:\n    assert in_band(value) == expected, value\nprint(\"All five passed\")",
        "input": "",
        "output": "All five passed",
        "tryEn": "Change the left <= to <. Read the value attached to AssertionError and identify the boundary the new condition excludes.",
        "tryZh": "把左边的 <= 换成 <，看 AssertionError 后面的数值，找出新条件漏掉了哪个端点。"
      }
    ],
    "check": {
      "en": "Predict the value printed for each input.",
      "zh": "预测两个列表各自对应的输出。",
      "code": "def inspect(values, limit=4):\n    for value in values:\n        if value >= limit:\n            return value - limit\n    return None\n\nprint(inspect([2, 4, 8]), inspect([1, 3]))",
      "answer": "0 None",
      "why": "The first call skips 2 and reaches 4. Equality satisfies >=, so return sends 4 − 4 back immediately. The second list has no qualifying value and reaches return None.",
      "whyZh": "第一次调用跳过 2 后遇到 4。等于界限也满足 >=，所以直接返回 4 − 4。第二个列表里没有符合条件的值，于是执行循环后的 return None。"
    },
    "goals": "Define and call functions, follow parameters into a call and return values back to the caller. Pass one function into another, then test ordinary inputs and values exactly on a boundary.",
    "goalsZh": "定义并调用函数，追踪实参怎样传入、结果怎样返回。把函数作为参数传给另一个函数，再用普通输入和恰好落在边界的输入检验结果。"
  },
  {
    "unit": "L7",
    "intro": "A caller hands a list to a function. Which edits will the caller see? At each assignment, locate its target: a name, a slot inside an object, or a whole slice.",
    "introZh": "把列表交给函数后，外面能看到哪些修改？每遇到一次赋值，先找它的目标：是变量名、对象里的一个位置，还是一段切片？",
    "sections": [
      {
        "title": "Follow the target of an assignment",
        "titleZh": "看清赋值要改哪里",
        "en": "A name refers to an object. A name on the left of = can be redirected to another object. An index on the left targets a slot inside a list. Here label starts at the same integer as bins[0], then assigning 8 to label changes only that name. Assigning to bins[0] changes the slot that observer also sees.",
        "zh": "变量名指向对象。= 左边是变量名时，可以让它改指另一个对象；左边是列表下标时，赋值目标是列表里的一个位置。这里 label 起初指向 bins[0] 里的整数，随后只有 label 被赋值为 8。给 bins[0] 赋值则改变列表中的位置，observer 也能看到。",
        "code": "bins = [3, 6]\nobserver = bins\nlabel = bins[0]\nlabel = 8\nprint(label, bins)\nbins[0] = 9\nprint(label, observer)",
        "input": "",
        "output": "8 [3, 6]\n8 [9, 6]",
        "tryEn": "Replace bins[0] = 9 with bins = [9, 6]. Predict what observer sees on the second line.",
        "tryZh": "把 bins[0] = 9 改成 bins = [9, 6]。预测第二行 observer 会显示什么。"
      },
      {
        "title": "Trace identity, rebinding and deletion",
        "titleZh": "追踪身份、重新绑定和删除名字",
        "en": "Names that refer to the same object are aliases. is checks object identity, and == compares values. A slice makes a fresh outer list with equal items here. del original removes that name; alias still provides access to the list, so the object can still be changed.",
        "zh": "指向同一对象的几个名字互为别名。is 检查对象身份，== 比较值。这里的切片生成一个新的外层列表，两边的元素值相同。del original 删除这个名字，alias 仍然指向列表，因此还可以通过它修改该对象。",
        "code": "original = [2, 5]\nalias = original\ncopy = original[:]\nprint(alias is original, copy is original, copy == original)\ndel original\nalias.append(7)\nprint(alias, copy)",
        "input": "",
        "output": "True False True\n[2, 5, 7] [2, 5]",
        "tryEn": "Change copy = original[:] to copy = original. Predict the three Boolean values and both final lists.",
        "tryZh": "把 copy = original[:] 改成 copy = original。预测三个布尔值和最后的两个列表。"
      },
      {
        "title": "Pass a list or pass one item",
        "titleZh": "传入一个列表或列表的一项",
        "en": "A function parameter receives the object supplied by its caller. Passing counts[0] gives add_one an integer. Assigning n += 1 inside that call produces a local result. Passing counts gives change_first the list itself, so values[0] += 1 writes a new value into its first slot and the caller sees that change.",
        "zh": "形参接收调用者给它的对象。传入 counts[0] 时，add_one 收到一个整数；函数里的 n += 1 得到局部结果。传入 counts 时，change_first 收到列表本身，values[0] += 1 会把新值写回它的第一个位置，外面也能看到这一改动。",
        "code": "def add_one(n):\n    n += 1\n    return n\n\ndef change_first(values):\n    values[0] += 1\n\ncounts = [4, 8]\nadd_one(counts[0])\nprint(counts)\nchange_first(counts)\nprint(counts)",
        "input": "",
        "output": "[4, 8]\n[5, 8]",
        "tryEn": "Replace the first call with counts[0] = add_one(counts[0]). The last call still runs. Predict both lists.",
        "tryZh": "把第一次调用改成 counts[0] = add_one(counts[0])。最后一次调用照常执行，预测两行列表。"
      },
      {
        "title": "Compare two updates inside a call",
        "titleZh": "跟踪函数里的两次扩展",
        "en": "At the start of adjust, its parameter points to the caller’s list. For a built-in list, += extends the existing list, so the caller sees 4 immediately. List + creates a fresh outer list; the assignment after it redirects only the local name. Returning that new list gives the caller a separate result to keep.",
        "zh": "进入 adjust 时，形参指向调用者的列表。对于内置列表，+= 会扩展原列表，因此调用者的列表里会出现 4。列表的 + 会生成新外层列表；那一行赋值只让局部名字改指新列表。return 把新列表交回，调用者可以单独保存它。",
        "code": "def adjust(values):\n    values += [4]\n    values = values + [5]\n    return values\n\ndata = [3]\nresult = adjust(data)\nprint(data, result)\nprint(data is result)",
        "input": "",
        "output": "[3, 4] [3, 4, 5]\nFalse",
        "tryEn": "Replace values = values + [5] with values += [5]. Predict whether data is result becomes True.",
        "tryZh": "把 values = values + [5] 改成 values += [5]。预测 data is result 是否会变为 True。"
      },
      {
        "title": "Let two parameters see one list",
        "titleZh": "两个形参指向同一个列表",
        "en": "Two argument positions can receive the very same list. In stamp(log, log), both left and right refer to log. After left.append(\"A\"), len(right) is already 1. Each fresh [] expression in stamp([], []) creates its own list, so the two parameters then see different objects.",
        "zh": "调用时，两个实参位置可以传入同一个列表。stamp(log, log) 中，left 和 right 都指向 log。left.append(\"A\") 之后，len(right) 已经是 1。而 stamp([], []) 中两个 [] 各自创建列表，这时两个形参指向不同对象。",
        "code": "def stamp(left, right):\n    left.append(\"A\")\n    right.append(len(left))\n    return right\n\nlog = []\nprint(stamp(log, log))\nprint(stamp([], []))",
        "input": "",
        "output": "['A', 1]\n[1]",
        "tryEn": "Replace len(left) with len(right). Focus on the second call: what is the length of right just before it appends the integer?",
        "tryZh": "把 len(left) 换成 len(right)。重点看第二次调用：right 在追加整数前有多长？"
      },
      {
        "title": "Copy a nested record at the right depth",
        "titleZh": "按需要的深度复制记录",
        "en": "A dictionary can hold a list as one of its values. record.copy() makes a new dictionary whose entries initially point to the same values. Replacing draft[\"site\"] touches only the new dictionary, but draft[\"readings\"].append(3) reaches the shared list. deepcopy recursively copies the nested data here, giving the archive its own list.",
        "zh": "字典的某个值也可以是列表。record.copy() 建立新字典，各条目起初仍指向相同的值。替换 draft[\"site\"] 只影响新字典，而 draft[\"readings\"].append(3) 会找到并修改共享的列表。deepcopy 会递归复制这里的嵌套数据，给 archive 一份自己的列表。",
        "code": "from copy import deepcopy\n\nrecord = {\"site\": \"N\", \"readings\": [2]}\ndraft = record.copy()\narchive = deepcopy(record)\ndraft[\"site\"] = \"S\"\ndraft[\"readings\"].append(3)\nprint(record)\nprint(archive)",
        "input": "",
        "output": "{'site': 'N', 'readings': [2, 3]}\n{'site': 'N', 'readings': [2]}",
        "tryEn": "Use record.copy() to create archive too. Which of its two fields will show the update?",
        "tryZh": "把创建 archive 的方式也改为 record.copy()。它的两个字段中，哪一个会显示后来的变化？"
      },
      {
        "title": "Find the mutable object inside a tuple",
        "titleZh": "找到元组里的可变对象",
        "en": "Integers, strings and tuples are immutable. Lists, dictionaries and sets can change in place. A tuple fixes the reference stored in each of its slots, but a slot may point to a list. Following that reference and calling append changes the inner list, so printing the tuple shows the updated contents.",
        "zh": "整数、字符串和元组不可变；列表、字典和集合可以原地改变。元组的各个位置固定保存某个引用，其中一个位置可以指向列表。顺着这个引用调用 append，改变的是内部列表，所以再打印元组时能看到新的内容。",
        "code": "record = (\"west\", [4, 8])\nsamples = record[1]\nsamples.append(9)\nprint(record)\nprint(samples is record[1])",
        "input": "",
        "output": "('west', [4, 8, 9])\nTrue",
        "tryEn": "Change samples = record[1] to samples = record[1][:]. Predict both printed lines.",
        "tryZh": "把 samples = record[1] 改成 samples = record[1][:]。预测两行输出。"
      },
      {
        "title": "Build a grid with independent rows",
        "titleZh": "让网格中的每行彼此独立",
        "en": "List repetition copies references into the outer list. In [[0, 0]] * 3, the inner list is created once and all three positions point to it. In the comprehension, [0, 0] is evaluated once per iteration, creating three separate rows. grid[1][0] selects row 1 and then changes column 0 inside it.",
        "zh": "列表重复会把引用重复放进外层列表。[[0, 0]] * 3 只创建了一次内部列表，三个位置都指向它。推导式每轮都重新计算 [0, 0]，因此创建了三条独立的行。grid[1][0] 先选中下标为 1 的行，再修改其中下标为 0 的列。",
        "code": "shared = [[0, 0]] * 3\ngrid = [[0, 0] for k in range(3)]\nshared[1][0] = 7\ngrid[1][0] = 7\nprint(shared)\nprint(grid)",
        "input": "",
        "output": "[[7, 0], [7, 0], [7, 0]]\n[[0, 0], [7, 0], [0, 0]]",
        "tryEn": "Replace shared[1][0] = 7 with shared[1] = [7, 0]. Are you changing a shared row or replacing a slot in the outer list?",
        "tryZh": "把 shared[1][0] = 7 改成 shared[1] = [7, 0]。这次是在修改共享的行，还是替换外层列表中的一个位置？"
      },
      {
        "title": "Track a default list across calls",
        "titleZh": "追踪多次调用共用的默认列表",
        "en": "Python evaluates a default expression when it executes the function definition. The same default list is available each time remember is called without a log. Using None as the default lets a call create a fresh list inside the function. An explicitly supplied empty list should stay connected to its caller, so the test checks log is None.",
        "zh": "Python 执行 def 定义时就会计算默认值表达式。每次调用 remember 而不传 log，都会用到定义时生成的同一个列表。把默认值设成 None，再在函数内部创建新列表，就能让每次省略参数的调用各得一份。调用者明确传入的空列表应与调用者保持关联，因此检查的是 log is None。",
        "code": "def remember(item, log=[]):\n    log.append(item)\n    return log\n\ndef fresh(item, log=None):\n    if log is None:\n        log = []\n    log.append(item)\n    return log\n\nprint(remember(3))\nprint(remember(8))\nprint(fresh(3))\nprint(fresh(8))",
        "input": "",
        "output": "[3]\n[3, 8]\n[3]\n[8]",
        "tryEn": "Add box = [] and fresh(6, box), then print(box). Change if log is None to if not log and repeat. Why does box now stay empty?",
        "tryZh": "在末尾加入 box = []、fresh(6, box) 和 print(box)。再把 if log is None 改成 if not log 后重跑。为什么现在 box 保持为空？"
      },
      {
        "title": "Track both a method’s effect and its result",
        "titleZh": "分别追踪方法的改动和返回值",
        "en": "A method call can change the list and also return an object. pop(0) removes the first item and returns it, so first receives the integer 5. append and sort change the list and return None. Writing items = items.append(first) would redirect the name items to None after the append has already happened.",
        "zh": "调用方法时，要同时看列表发生的变化和得到的返回值。pop(0) 删除首项并返回它，所以 first 收到整数 5。append 和 sort 都会改变列表，并返回 None。写成 items = items.append(first) 时，追加已经发生，随后变量名 items 会改指 None。",
        "code": "items = [5, 2, 4]\nfirst = items.pop(0)\nresult = items.append(first)\nprint(first, items, result)\nitems.sort()\nprint(items)",
        "input": "",
        "output": "5 [2, 4, 5] None\n[2, 4, 5]",
        "tryEn": "Use pop() with no index to remove the last item. Predict the line printed before the sort.",
        "tryZh": "把 pop(0) 换成没有下标的 pop()，这会删除末项。预测排序前打印的那一行。"
      },
      {
        "title": "Replace list items while looping",
        "titleZh": "在循环中替换列表元素",
        "en": "for value in values makes value refer to each item in turn. Reassigning that local loop name leaves the slot in the list untouched. range(len(values)) supplies the valid indexes. Assigning to values[i] replaces the item at a particular index, so the second loop changes the list.",
        "zh": "for value in values 让循环变量 value 依次指向每一项。给这个循环变量重新赋值，列表里的位置仍然保留原值。range(len(values)) 给出有效下标。给 values[i] 赋值会替换具体位置上的元素，所以第二个循环能改变列表。",
        "code": "values = [2, 4, 6]\nfor value in values:\n    value = value + 1\nprint(values)\nfor i in range(len(values)):\n    values[i] = values[i] + 1\nprint(values)",
        "input": "",
        "output": "[2, 4, 6]\n[3, 5, 7]",
        "tryEn": "Change range(len(values)) to range(1, len(values)). Which reading stays unchanged?",
        "tryZh": "把 range(len(values)) 改成 range(1, len(values))。哪一个读数会保持原值？"
      },
      {
        "title": "Filter a shared list without skipping items",
        "titleZh": "筛选共享列表，避免漏检",
        "en": "If you remove the current item while looping over a list, the next item shifts into the old position. The loop then advances and can skip it. First collect the items you want to keep. Assigning to values[:] replaces all slots in the existing list, so the caller and every alias see the filtered contents. Assigning to values alone would rebind one name.",
        "zh": "遍历列表时删除当前项，下一项会左移到原位置；循环继续向前，就可能跳过它。先收集需要保留的元素。给 values[:] 赋值会替换原列表里的全部位置，因此调用者和所有别名都能看到筛选结果。只给 values 赋值，则只是把这一个名字重新绑定。",
        "code": "def keep_positive(values):\n    keep = [value for value in values if value > 0]\n    values[:] = keep\n\ndata = [0, -1, 3, 0, 5]\nobserver = data\nkeep_positive(data)\nprint(data, observer)",
        "input": "",
        "output": "[3, 5] [3, 5]",
        "tryEn": "Replace values[:] = keep with values = keep. Run it, then try values.clear() instead. Explain both results using the assignment target.",
        "tryZh": "把 values[:] = keep 换成 values = keep 后运行，再改成 values.clear() 运行。根据操作的目标解释这两次结果。"
      }
    ],
    "check": {
      "en": "Track the shared row and the two outer lists. What does the last line print?",
      "zh": "追踪共享行和两个外层列表，最后一行打印什么？",
      "code": "def patch(rows):\n    view = rows[:]\n    view[0].append(8)\n    view[1] = [0]\n    return view\n\ndata = [[2], [4]]\nupdated = patch(data)\nprint(data, updated, data is updated)",
      "answer": "[[2, 8], [4]] [[2, 8], [0]] False",
      "why": "Slicing makes distinct outer lists. Their first slots point to the same row, which gains 8. The replacement [0] is written into the second slot of view only.",
      "whyZh": "切片产生两个不同的外层列表。两边的第一个位置指向同一行，因此都看到追加的 8。新列表 [0] 只写入 view 的第二个位置。"
    },
    "goals": "Trace what two names see when they share one list. Predict the effects of rebinding, shallow copies, nested changes and mutable defaults, then update a shared list without skipping items.",
    "goalsZh": "两个名字指向同一个列表时，分别跟踪它们看到的内容。分清重新赋值、浅拷贝、嵌套修改和可变默认参数的影响，学会在筛选共享列表时避免漏掉元素。"
  },
  {
    "unit": "L8",
    "intro": "A technician needs a particular reading from a log. First find its position. Then arrange the readings in order and follow how that order changes the work of searching.",
    "introZh": "技术员想从一份日志中找到某个读数。先找出它的位置，再把读数排序，观察有了顺序之后能少查多少次。",
    "sections": [
      {
        "title": "Find the first matching position",
        "titleZh": "找到第一次出现的位置",
        "en": "The positions in [8, 5, 8] are 0, 1 and 2. Start at position 0 and compare each value with the target. A return ends the whole function, so put return -1 after the loop: only then has every candidate failed. Check for -1 before using the result as an index, because a[-1] would read the last item.",
        "zh": "列表 [8, 5, 8] 的位置依次是 0、1、2。从位置 0 开始，把每个值和目标比较。return 会结束整个函数，所以要把 return -1 放在循环结束之后：这时才确定所有位置都不匹配。拿返回值去访问列表之前先检查它是不是 -1，因为 a[-1] 会取到最后一项。",
        "code": "def first(a, target):\n    for i in range(len(a)):\n        if a[i] == target:\n            return i\n    return -1\n\nprint(first([8, 5, 8], 8))\nprint(first([8, 5, 8], 5))",
        "input": "",
        "output": "0\n1",
        "tryEn": "Move return -1 four spaces to the right so it is inside the loop, aligned with if. Predict which print changes, then run it.",
        "tryZh": "把 return -1 向右移四个空格，让它在循环内部和 if 对齐。先预测哪一行输出会变，再运行。"
      },
      {
        "title": "Collect every index or every value",
        "titleZh": "收集位置，或收集数值",
        "en": "Suppose the log contains two readings of -2. To collect both positions, start with [] and append i every time its value matches. To collect negative readings themselves, use a condition: lambda x: x < 0 is a small function that answers True when x is negative. filter checks this function on each item, and list collects the items that pass in their original order.",
        "zh": "假设日志里有两个 -2。要收齐它们的位置，先建空列表 []，每次匹配时把位置 i 追加进去。若要负数读数本身，可以写条件函数：lambda x: x < 0 在 x 是负数时返回 True。filter 对每一项检查这个条件，list 把通过的值按原顺序收起来。",
        "code": "a = [4, -2, -2, 0]\npositions = []\nfor i, value in enumerate(a):\n    if value == -2:\n        positions.append(i)\nprint(positions)\nprint(list(filter(lambda x: x < 0, a)))",
        "input": "",
        "output": "[1, 2]\n[-2, -2]",
        "tryEn": "Change < 0 to <= 0. Which value enters the second list? Does the positions list change?",
        "tryZh": "把 < 0 改成 <= 0。第二个列表多了哪个值？第一个位置列表会变吗？"
      },
      {
        "title": "Trace a binary search",
        "titleZh": "手推二分查找",
        "en": "On an ascending list, low and high are the first and last positions still possible. Integer division // rounds the midpoint down. The first midpoint below holds 8, so finding 11 means keeping only positions 3 to 4. Move the bound past the tested midpoint with mid + 1 or mid - 1. When low > high the interval has no positions left.",
        "zh": "在升序列表中，low 和 high 分别是尚有可能的最左、最右位置。用整除 // 把中点下取整。下面第一次看到的中间值是 8；找 11 时只需留下位置 3 到 4。用 mid + 1 或 mid - 1 越过刚查过的中点。当 low > high 时，区间里已经没有候选位置。",
        "code": "def locate(a, target):\n    low, high = 0, len(a) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        print(low, mid, high, a[mid])\n        if a[mid] == target:\n            return mid\n        if a[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1\n\nprint(locate([2, 5, 8, 11, 14], 11))",
        "input": "",
        "output": "0 2 4 8\n3 3 4 11\n3",
        "tryEn": "Search for 10. Follow the printed bounds until they cross, then explain the returned -1.",
        "tryZh": "把目标改成 10。沿着输出推 low 和 high，算出最后怎样交错，再解释返回的 -1。"
      },
      {
        "title": "Decide when binary search works",
        "titleZh": "判断何时可以二分",
        "en": "Binary search discards an entire side because that side is sorted. Here an unsorted list hides 5 to the left of a smaller middle value. On a sorted list with duplicates, the first middle match ends the search, so its index can be later than the first occurrence. Sorting a new list just to search once also changes what its indices refer to.",
        "zh": "二分查找之所以能整段排除候选，是因为列表有序。下面的乱序列表把 5 放在了更小的中间值左侧。升序列表若有重复值，找到的第一个中点就会结束查找，它未必是最早出现的位置。若临时把列表排序后再搜索，返回的下标也是新顺序中的位置。",
        "code": "def find(a, wanted):\n    lo, hi = 0, len(a) - 1\n    while lo <= hi:\n        m = (lo + hi) // 2\n        if a[m] == wanted:\n            return m\n        if a[m] < wanted:\n            lo = m + 1\n        else:\n            hi = m - 1\n    return -1\n\nprint(find([5, 1, 2], 5))\nprint(find([1, 5, 5, 5, 9], 5))",
        "input": "",
        "output": "-1\n2",
        "tryEn": "Sort the first input by hand. Run again and identify the index of 5 in the new list.",
        "tryZh": "把第一个输入手动排成升序。再运行，指出 5 在新列表里的下标。"
      },
      {
        "title": "Count the work of a search",
        "titleZh": "数一数到底查了几次",
        "en": "Let n be the number of items. An unsuccessful linear search visits n items, which we write O(n). Binary search roughly halves the remaining count each time: doubling the list adds about one more midpoint, giving O(log n) in the worst case. Either method can hit the target on its first check, O(1). Sorting the input first costs extra, so repeated lookups make ordered data especially useful.",
        "zh": "用 n 表示元素个数。线性查找若找不到目标，需要查看 n 项，记作 O(n)。二分查找每次把候选数大约减半；列表加倍，最多查看的中点通常只多一个，最坏增长为 O(log n)。两种方法都有可能第一次就命中，最好情况是 O(1)。先排序本身也要花时间；需要反复查询时，有序数据特别有用。",
        "code": "for n in [8, 16, 32]:\n    a = list(range(n))\n    # Target n is larger than every value.\n    lo, hi, checks = 0, n - 1, 0\n    while lo <= hi:\n        m = (lo + hi) // 2\n        checks += 1\n        if a[m] == n:\n            break\n        if a[m] < n:\n            lo = m + 1\n        else:\n            hi = m - 1\n    print(n, len(a), checks)",
        "input": "",
        "output": "8 8 4\n16 16 5\n32 32 6",
        "tryEn": "Add 64 to the list of sizes. Predict the linear and binary check counts before you run.",
        "tryZh": "在规模列表中加上 64。先预测线性和二分分别查多少次，再运行。"
      },
      {
        "title": "Bubble sort: follow one pass",
        "titleZh": "冒泡排序：跟完一整趟",
        "en": "Compare neighbours from left to right. If the left value is bigger, swap the pair; Python evaluates the two values on the right before assigning them on the left. Watch 4 move across two neighbours. At the end of one pass the largest item is in its final position, while the earlier items may still need work.",
        "zh": "从左到右比较相邻元素。左边的值较大就交换这一对；Python 会先取出等号右边的两个值，再分别写到左边。观察 4 怎样连续越过两个邻居。一趟结束，最大值已在最终位置，前面的部分可能还要继续整理。",
        "code": "a = [4, 3, 1]\nfor j in range(len(a) - 1):\n    if a[j] > a[j + 1]:\n        a[j], a[j + 1] = a[j + 1], a[j]\n    print(a)",
        "input": "",
        "output": "[3, 4, 1]\n[3, 1, 4]",
        "tryEn": "Use [1, 4, 3]. Predict which pair swaps and which print shows the original order.",
        "tryZh": "换成 [1, 4, 3]，预测哪一对会交换，以及哪一行仍显示原顺序。"
      },
      {
        "title": "Bubble sort: shrink the unsorted end",
        "titleZh": "冒泡排序：缩短下一趟",
        "en": "After each pass, leave the fixed last position out of the next pass. The variable swapped begins False on each pass and turns True when anything moves. If an entire pass makes no swaps, every neighbour is already in order, so stop. This version makes n - 1 comparisons on an already sorted list of n ≥ 2 items, O(n); a reversed list needs about n²/2 comparisons, O(n²).",
        "zh": "每过一趟，下一趟就可以跳过末尾已就位的元素。每趟开始把 swapped 设为 False，只要交换过就变为 True。整趟没有交换，说明所有相邻元素都已经有序，可以停下。在长度 n ≥ 2 的已排序列表上只比较 n - 1 次，即 O(n)；逆序时约比较 n²/2 次，即 O(n²)。",
        "code": "a = [3, 1, 4, 2]\nfor end in range(len(a) - 1, 0, -1):\n    swapped = False\n    for j in range(end):\n        if a[j] > a[j + 1]:\n            a[j], a[j + 1] = a[j + 1], a[j]\n            swapped = True\n    print(end, a, swapped)\n    if not swapped:\n        break",
        "input": "",
        "output": "3 [1, 3, 2, 4] True\n2 [1, 2, 3, 4] True\n1 [1, 2, 3, 4] False",
        "tryEn": "Start with [1, 2, 3, 4]. How many pass lines are printed?",
        "tryZh": "从 [1, 2, 3, 4] 开始，预测会打印几趟。"
      },
      {
        "title": "Insertion sort: make a gap",
        "titleZh": "插入排序：给新值挪一个位置",
        "en": "Treat the left end as a sorted hand of cards. Save a[i] in key, then shift larger cards right until a gap is ready. With [3, 5] already sorted and key = 2, first copy 5 right, then 3; put the saved 2 into the gap at index 0. Test j >= 0 first so the loop stops at the left edge. In sorted data each insertion takes one check, O(n) overall; in reverse order shifts add up to O(n²).",
        "zh": "把左边一段当作手中已经排好的牌。先把 a[i] 存在 key 中，再把较大的牌向右挪出空位。若已经排好 [3, 5]，待插的是 2，就依次把 5、3 向右复制，最后把保存的 2 填到下标 0。先判断 j >= 0，越过左边界就停。顺序已排好时每次插入只比较一下，总共 O(n)；逆序时移动次数累计到 O(n²)。",
        "code": "a = [5, 3, 2]\nfor i in range(1, len(a)):\n    key = a[i]\n    j = i - 1\n    while j >= 0 and a[j] > key:\n        a[j + 1] = a[j]\n        j -= 1\n    a[j + 1] = key\n    print(key, a)",
        "input": "",
        "output": "3 [3, 5, 2]\n2 [2, 3, 5]",
        "tryEn": "Add print(a) immediately after a[j + 1] = a[j]. Where is the key stored while the list briefly contains a duplicate?",
        "tryZh": "在 a[j + 1] = a[j] 下一行同样缩进写 print(a)。列表暂时有重复值时，待插入的值保存在哪里？"
      },
      {
        "title": "Selection sort: fix the next position",
        "titleZh": "选择排序：确定下一个最终位置",
        "en": "To fill position i, scan the remaining positions and remember the index of the smallest value. Make one swap after that scan. On the first pass below, best moves from index 0 to 1 to 2 before 1 swaps into the front. The prefix now contains the smallest values in their final positions. Even a sorted input still needs every scan, so best and worst time are O(n²), with at most n - 1 swaps.",
        "zh": "要填位置 i，就扫一遍余下的位置，用一个下标记住目前最小的值。扫完这一趟才交换。下面第一趟，best 从 0 变为 1，再变为 2，然后 1 被换到最前面。左边逐渐放好全列表中最小的几个值，它们已经到达最终位置。即使输入本来有序也要扫完，最好和最坏时间都是 O(n²)，至多交换 n - 1 次。",
        "code": "a = [6, 4, 1, 3]\nfor i in range(len(a) - 1):\n    best = i\n    for j in range(i + 1, len(a)):\n        if a[j] < a[best]:\n            best = j\n    if best != i:\n        a[i], a[best] = a[best], a[i]\n    print(i, best, a)",
        "input": "",
        "output": "0 2 [1, 4, 6, 3]\n1 3 [1, 3, 6, 4]\n2 3 [1, 3, 4, 6]",
        "tryEn": "Start with [1, 3, 4, 6]. Compare i and best on every pass to count the swaps.",
        "tryZh": "换成 [1, 3, 4, 6]。逐趟比较 i 和 best，数出交换次数。"
      },
      {
        "title": "Keep a copy or change the list",
        "titleZh": "返回新列表与原地修改",
        "en": "sorted(a) builds a new ordered list and leaves a alone. The list method a.sort() rearranges the existing list and returns None. A second name for a sees the rearrangement too. Sorting should preserve every item and its duplicate count; an empty list and a one-item list already meet that condition.",
        "zh": "sorted(a) 建立新的有序列表，保留 a 的原顺序。列表方法 a.sort() 会直接改动原列表，返回值是 None。指向 a 的其他变量也能看到新顺序。排序要保留全部元素及重复次数；空列表和单元素列表本来就有序。",
        "code": "a = [3, 1, 3]\nalias = a\nordered = sorted(a)\nprint(a, ordered)\nresult = a.sort()\nprint(alias, result)\nassert alias == [1, 3, 3]",
        "input": "",
        "output": "[3, 1, 3] [1, 3, 3]\n[1, 3, 3] None",
        "tryEn": "Change alias = a to alias = a[:]. Predict the second print and explain why the assertion now fails.",
        "tryZh": "把 alias = a 改成 alias = a[:]。预测第二行输出，并解释为什么这时最后一条断言会失败。"
      },
      {
        "title": "Rank records and break ties",
        "titleZh": "按记录字段排序并处理同分",
        "en": "Each tuple here holds a job name, priority and duration. A key function extracts what Python should compare while the whole tuple travels together. The pair (priority, duration) compares priorities first and durations only when priorities tie. Jobs tied on both fields keep their original order; this property is called stability. reverse=True arranges keys from largest to smallest.",
        "zh": "这里每个元组存任务名、优先级和耗时。key 函数取出用于比较的字段，移动时整条记录一起移动。键 (优先级, 耗时) 先比较优先级，优先级相同才比较耗时。两个字段都相同时保留原先的前后关系，这叫稳定性。reverse=True 会把键从大到小排。",
        "code": "jobs = [(\"C\", 1, 4), (\"B\", 1, 2), (\"A\", 1, 2), (\"D\", 0, 9)]\nordered = sorted(jobs, key=lambda job: (job[1], job[2]))\nprint([job[0] for job in ordered])\nlongest = sorted(jobs, key=lambda job: job[2], reverse=True)\nprint([job[0] for job in longest])",
        "input": "",
        "output": "['D', 'B', 'A', 'C']\n['D', 'C', 'B', 'A']",
        "tryEn": "Add job[0] as a third element of the first key tuple. Which two jobs change places?",
        "tryZh": "在第一个排序键的元组末尾加上 job[0]。哪两个任务会互换位置？"
      }
    ],
    "check": {
      "en": "The program performs one left-to-right pass. What single line is printed?",
      "zh": "程序从左到右比较一趟。它输出哪一行？",
      "code": "a = [5, 3, 4, 1]\nfor j in range(len(a) - 1):\n    if a[j] > a[j + 1]:\n        a[j], a[j + 1] = a[j + 1], a[j]\nprint(a)",
      "answer": "[3, 4, 1, 5]",
      "why": "5 swaps with 3, then 4, then 1. After one pass only the last position is guaranteed to be final.",
      "whyZh": "5 依次与 3、4、1 交换。一趟结束时只保证最后一个位置已经就位。"
    },
    "goals": "Trace linear and binary search, including a missing target. Work through bubble, insertion and selection sort one pass at a time, count comparisons and decide the order of records with tied keys.",
    "goalsZh": "手推线性查找和二分查找，包括目标不存在的情况。逐趟写出冒泡、插入和选择排序的结果，统计比较次数，判断排序键相等时记录的先后。"
  },
  {
    "unit": "L9",
    "intro": "How can one function sort a whole list or weigh a box inside another box? Give one call a precise job, solve a smaller input, and follow its returned value back to the waiting caller.",
    "introZh": "一个函数怎么排好整份列表，又怎么称出盒中盒的总重？先说清一次调用要交回什么，换一个更小的输入再调用，最后跟着返回值回到等候的上一层。",
    "sections": [
      {
        "title": "Give one call a smaller job",
        "titleZh": "把同一件事交给更小的输入",
        "en": "The factorial of a whole number n ≥ 0 is written n!. For example, 3! = 3 × 2 × 1; 0! is defined as 1. Once you know the answer for n - 1, multiply it by n to get the answer for n. That gives a recursive function: it calls itself with n - 1 until the base case, n == 0, can answer directly.",
        "zh": "对非负整数 n，阶乘写作 n!。例如 3! = 3 × 2 × 1，规定 0! 等于 1。只要知道 n - 1 的阶乘，再乘以 n 就能算出 n 的阶乘。于是函数可以用 n - 1 再调用自己，直到 n == 0 这个能直接给出答案的情形；这叫递归的终止条件。",
        "code": "def factorial(n):\n    if n == 0:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(0))\nprint(factorial(3))",
        "input": "",
        "output": "1\n6",
        "tryEn": "Change the last call to factorial(4). Write 4 × factorial(3) on paper before you run it.",
        "tryZh": "把最后一次调用改成 factorial(4)。先在纸上写出 4 × factorial(3)，再运行。"
      },
      {
        "title": "Trace both the calls and the returns",
        "titleZh": "沿调用下去，再沿返回上来",
        "en": "In factorial(2), the call holding n = 2 waits for factorial(1). The next call has its own n = 1 and waits for factorial(0). Python keeps these waiting calls on a call stack. The zero call returns 1; the waiting calls then finish in reverse order, first 1 × 1, then 2 × 1. A missing multiplication would throw away the factor saved by that call.",
        "zh": "算 factorial(2) 时，持有 n = 2 的那次调用会等 factorial(1)。下一层有自己的 n = 1，又等 factorial(0)。Python 把这些还没做完的调用存在调用栈里。最底层返回 1 后，等待的两层按相反顺序收尾，先算 1 × 1，再算 2 × 1。若省略乘法，那一层原本保存的因子就没有用上。",
        "code": "def factorial(n):\n    print(\"enter\", n)\n    if n == 0:\n        answer = 1\n    else:\n        answer = n * factorial(n - 1)\n    print(\"leave\", n, answer)\n    return answer\n\nfactorial(2)",
        "input": "",
        "output": "enter 2\nenter 1\nenter 0\nleave 0 1\nleave 1 1\nleave 2 2",
        "tryEn": "Change n * factorial(n - 1) to factorial(n - 1). Compare the enter lines and the returned answers.",
        "tryZh": "把 n * factorial(n - 1) 改成 factorial(n - 1)。对比进入各层的顺序和交回的答案。"
      },
      {
        "title": "Search only the chosen half",
        "titleZh": "只递归查找选中的一半",
        "en": "Give search the inclusive indices lo and hi of an ascending list. If lo > hi there is no candidate, so return -1 before reading a midpoint. A match returns its index. Otherwise one recursive call keeps the side that can contain the target; return that call’s answer so it reaches the original caller. Updating either bound past m makes the interval smaller each time.",
        "zh": "给 search 一份升序列表和包含两端的下标区间 lo、hi。若 lo > hi，已经没有候选，先返回 -1，再也不读中点。中点匹配就返回其下标。否则只递归进入目标可能所在的一侧，并用 return 把下一层的结果逐层传回来。每次让边界越过 m，区间才会变小。",
        "code": "def search(a, target, lo, hi):\n    if lo > hi:\n        return -1\n    m = (lo + hi) // 2\n    print(\"inspect\", m, a[m])\n    if a[m] == target:\n        return m\n    if a[m] < target:\n        return search(a, target, m + 1, hi)\n    return search(a, target, lo, m - 1)\n\na = [3, 8, 12, 17, 20]\nprint(search(a, 17, 0, len(a) - 1))",
        "input": "",
        "output": "inspect 2 12\ninspect 3 17\n3",
        "tryEn": "Search for 18 instead. List the midpoints and calculate the final empty interval.",
        "tryZh": "改为搜索 18。写出经过的所有中点，并算出最后一个空区间的两端。"
      },
      {
        "title": "Merge two lists that are already sorted",
        "titleZh": "合并两份已有序的列表",
        "en": "Point i at the next unused left item and j at the next unused right item. Each list is sorted, so the smaller of these two items is the smallest still waiting anywhere. Append it to the output and advance only its pointer. Once one side is empty, extend the output with the other side’s remaining items. Using <= takes from the left first on a tie, preserving the order of equal keys across the halves.",
        "zh": "让 i 指向左边下一个还没拿的值，j 指向右边下一个还没拿的值。两边都已经排好序，所以这两个值中较小的就是全部待选值里最小的。把它追加到结果，只移动取值那一侧的指针。一侧用尽后，用 extend 把另一侧剩余元素逐个接上。用 <= 会在相等时优先取左边，让两半中键相同的记录保持原先顺序。",
        "code": "def merge(left, right):\n    i = j = 0\n    out = []\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            out.append(left[i])\n            i += 1\n        else:\n            out.append(right[j])\n            j += 1\n    out.extend(left[i:])\n    out.extend(right[j:])\n    return out\n\nprint(merge([1, 4, 4], [2, 4, 7]))",
        "input": "",
        "output": "[1, 2, 4, 4, 4, 7]",
        "tryEn": "Replace the left list with []. Which two lines make the right list appear in the result?",
        "tryZh": "把左列表改成 []。观察哪两行把右列表的内容放进并返回结果。"
      },
      {
        "title": "Split, sort both halves, then merge",
        "titleZh": "先拆分，两半排好后再合并",
        "en": "An empty or one-item list is already sorted. For a longer list, the slices a[:mid] and a[mid:] split it without losing the middle item. Finish sorting the left half, finish sorting the right half, then merge the two returned lists. For [4, 1, 3], the right half [1, 3] finishes its merge before the outer call can merge [4] with it.",
        "zh": "空列表或单元素列表天然有序。更长时，a[:mid] 和 a[mid:] 将它一分为二，中间那个元素归在右半。先完成左半的排序，再完成右半的排序，然后合并各自返回的有序列表。对于 [4, 1, 3]，右半 [1, 3] 会先完成它自己的合并，最外层这时才能把 [4] 和它合起来。",
        "code": "def merge(left, right):\n    out = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            out.append(left[i])\n            i += 1\n        else:\n            out.append(right[j])\n            j += 1\n    return out + left[i:] + right[j:]\n\ndef merge_sort(a):\n    if len(a) <= 1:\n        return a[:]\n    mid = len(a) // 2\n    left = merge_sort(a[:mid])\n    right = merge_sort(a[mid:])\n    result = merge(left, right)\n    print(\"merge\", left, right, \"=>\", result)\n    return result\n\nprint(merge_sort([4, 1, 3]))",
        "input": "",
        "output": "merge [1] [3] => [1, 3]\nmerge [4] [1, 3] => [1, 3, 4]\n[1, 3, 4]",
        "tryEn": "Try [4, 1, 3, 1]. Predict the first two completed merges and count the two 1s in the final list.",
        "tryZh": "换为 [4, 1, 3, 1]。预测最先完成的两次合并，再数最终列表中的两个 1。"
      },
      {
        "title": "Check what a base case promises",
        "titleZh": "检验终止条件交回的答案",
        "en": "The caller trusts that each returned half is already sorted. A pair such as [7, 2] still needs work, so returning it unchanged as a base case breaks that promise. The helper below handles length two by deciding which value comes first; it also leaves an empty list and a one-item list in order. This is another valid stopping rule for merge sort.",
        "zh": "上一层会把返回来的每一半当作已经排好。像 [7, 2] 这样的两项仍需比较，直接原样返回就违反了这个约定。下面的函数对两项先判断谁在前面，对空列表和单项保留原序。这样，归并排序也可以在长度为二时结束拆分。",
        "code": "def sort_small(a):\n    if len(a) == 2 and a[0] > a[1]:\n        return [a[1], a[0]]\n    return a[:]\n\nfor pair in [[], [3], [7, 2], [2, 2]]:\n    print(sort_small(pair))",
        "input": "",
        "output": "[]\n[3]\n[2, 7]\n[2, 2]",
        "tryEn": "Change > to <. Which example exposes the incorrect order? Add [2, 7] to catch the opposite input order.",
        "tryZh": "把 > 改成 <。哪个例子能暴露排序错误？再加上 [2, 7] 检验相反的输入顺序。"
      },
      {
        "title": "Count merge work by level",
        "titleZh": "按层统计归并的工作量",
        "en": "For eight items, the first round combines four pairs, the second combines two groups of four, and the third combines one group of eight. Each round places all eight items exactly once. Each doubling of the input adds one merge level, so merge sort takes O(n log n) time. Binary search also halves an interval, but follows only one half and inspects a single midpoint per step.",
        "zh": "对八项数据，第一轮合成四组两项，第二轮合成两组四项，第三轮合成一组八项。每一轮总共安放的都是八项。规模翻倍会多一层合并，所以归并排序的时间为 O(n log n)。二分查找也会减半，但它只走一半，每步只查看一个中点。",
        "code": "n = 8\ngroup = 2\ntotal = 0\nwhile group <= n:\n    groups = n // group\n    placed = groups * group\n    print(groups, \"groups of\", group, \"place\", placed)\n    total += placed\n    group *= 2\nprint(\"total\", total)",
        "input": "",
        "output": "4 groups of 2 place 8\n2 groups of 4 place 8\n1 groups of 8 place 8\ntotal 24",
        "tryEn": "Use another power of two, n = 16. Predict the number of rounds and total placements.",
        "tryZh": "换成另一个 2 的幂 n = 16。预测合并的轮数和安放的总次数。"
      },
      {
        "title": "Recurse on every child of a box",
        "titleZh": "递归处理盒子里的每个成员",
        "en": "An integer represents the weight of one parcel; a list contains the contents of one box. isinstance(item, int) identifies a parcel and returns its known weight. For a box, give this call a fresh total of zero and add the weight returned by each child. The inner [3, 1] returns 4 as one contribution to the outer total; an empty box has no children and contributes zero.",
        "zh": "整数代表一件包裹的重量，列表代表一只盒子里的全部成员。isinstance(item, int) 检查是不是整数，如果是就直接返回已知重量。每只盒子在自己的调用里从 total = 0 开始，把每个孩子返回的重量累加起来。内层 [3, 1] 返回 4，外层把它当作一份结果加进去；空盒子没有成员，结果是 0。",
        "code": "def weight(item):\n    if isinstance(item, int):\n        return item\n    total = 0\n    for child in item:\n        total += weight(child)\n    print(\"box\", item, \"weighs\", total)\n    return total\n\nprint(weight([2, [3, 1], []]))",
        "input": "",
        "output": "box [3, 1] weighs 4\nbox [] weighs 0\nbox [2, [3, 1], []] weighs 6\n6",
        "tryEn": "Make each box weigh 2 units of its own by changing total = 0 to total = 2. How many boxes, including empty ones, contribute that cost?",
        "tryZh": "把 total = 0 改为 total = 2，表示每只盒子自身重 2。包括空盒子在内，一共有几只盒子要计这个重量？"
      },
      {
        "title": "Pass a palindrome verdict back",
        "titleZh": "把回文判断逐层传回",
        "en": "A palindrome reads the same from both ends. Empty and one-letter words return True immediately; longer words with unequal ends return False. If the ends match, word[1:-1] removes them and leaves the same question for a shorter word. For \"abca\", the outer a characters match, but the inner \"bc\" returns False, which the outer call must pass back.",
        "zh": "回文的文字从两头读一样。空串、单字符直接返回 True；较长的词若两端不同，就返回 False。两端相同才取 word[1:-1] 去掉首尾，用同一个问题检查更短的词。\"abca\" 两头的 a 匹配，可内部的 \"bc\" 返回 False；外层必须把这个 False 传回去。",
        "code": "def palindrome(word):\n    if len(word) <= 1:\n        return True\n    if word[0] != word[-1]:\n        return False\n    return palindrome(word[1:-1])\n\nprint(palindrome(\"abca\"))\nprint(palindrome(\"level\"))",
        "input": "",
        "output": "False\nTrue",
        "tryEn": "Try \"abba\", \"\", and \"Aba\". Which calls reach the empty-string base case? Where does the case-sensitive comparison stop?",
        "tryZh": "试一下 \"abba\"、\"\"、\"Aba\"。哪些会到达空串这个终止条件？区分大小写的比较又会在哪里停？"
      },
      {
        "title": "Keep unfinished work on an explicit stack",
        "titleZh": "用列表保存还没完成的工作",
        "en": "A recursive function that follows children can run very deep, and Python has a limit on nested calls. A loop can keep the pending items in a list instead. pop() removes the last item; pushing children in reverse order makes the leftmost child come out first. Here the loop handles a whole nested shipment and accumulates each parcel weight once.",
        "zh": "递归沿着子节点深入时，嵌套调用的层数有上限。也可以让循环把还没处理的成员存在列表里。pop() 从末尾拿出一项；把孩子倒序放进去，下次先拿到的就是最左的孩子。下面的循环遍历整批嵌套货物，把每个包裹的重量都累加一次。",
        "code": "todo = [[1, [2, 3], 4]]\ntotal = 0\nwhile todo:\n    item = todo.pop()\n    if isinstance(item, int):\n        print(\"parcel\", item)\n        total += item\n    else:\n        todo.extend(reversed(item))\nprint(total)",
        "input": "",
        "output": "parcel 1\nparcel 2\nparcel 3\nparcel 4\n10",
        "tryEn": "Replace reversed(item) with item. Predict which parcel is printed first and whether the total weight changes.",
        "tryZh": "把 reversed(item) 改为 item。预测最先打印哪个包裹，最终总重会不会变。"
      }
    ],
    "check": {
      "en": "The function charges one unit for every list. Predict the printed charge.",
      "zh": "这个函数给每个列表计一单位费用。预测打印的总费用。",
      "code": "def charge(item):\n    if isinstance(item, int):\n        return item\n    total = 1\n    for child in item:\n        total += charge(child)\n    return total\n\nprint(charge([2, [], [1, [3]]]))",
      "answer": "10",
      "why": "The integers contribute 2 + 1 + 3 = 6. Four lists each contribute 1: the outer list, the empty list, [1, [3]], and [3]. The total is 10.",
      "whyZh": "整数贡献 2 + 1 + 3 = 6。外层列表、空列表、[1, [3]] 和 [3] 共四个列表，各计 1，所以总费用是 10。"
    },
    "goals": "Choose a stopping condition and follow a recursive call down and back up. Split and merge a list to sort it, then reuse the same reasoning on nested records and palindromes.",
    "goalsZh": "写出递归的终止条件，追踪每层调用和返回值。把列表拆开、归并成有序结果，再用同样的思路处理嵌套数据和回文。"
  }
];
