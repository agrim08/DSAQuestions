#simplify path:
def simplifyPath(self, path: str) -> str:
        stack = []
        cur = ""

        for c in path + "/":
            if c == "/":
                if cur == "..":
                    if stack : stack.pop()
                elif cur != "" and cur != ".":
                    stack.append(cur)
                cur = ""
            else:
                cur += c

        return "/" + "/".join(stack)

'''
    example: "/../abc//./def/
    
    dry run:
        Step 1: c = "/", cur = "" → Slash, cur empty, reset cur = "", stack = []
        Step 2: c = ".", cur = "" → Add to cur = ".", stack = []
        Step 3: c = ".", cur = "." → Add to cur = "..", stack = []
        Step 4: c = "/", cur = ".." → cur == "..", stack empty, reset cur = "", stack = []
        Step 5: c = "a", cur = "" → Add to cur = "a", stack = []
        Step 6: c = "b", cur = "a" → Add to cur = "ab", stack = []
        Step 7: c = "c", cur = "ab" → Add to cur = "abc", stack = []
        Step 8: c = "/", cur = "abc" → cur valid, append to stack = ["abc"], reset cur = ""
        Step 9: c = "/", cur = "" → Slash, cur empty, reset cur = "", stack = ["abc"]
        Step 10: c = ".", cur = "" → Add to cur = ".", stack = ["abc"]
        Step 11: c = "/", cur = "." → cur == ".", ignore, reset cur = "", stack = ["abc"]
        Step 12: c = "d", cur = "" → Add to cur = "d", stack = ["abc"]
        Step 13: c = "e", cur = "d" → Add to cur = "de", stack = ["abc"]
        Step 14: c = "f", cur = "de" → Add to cur = "def", stack = ["abc"]
        Step 15: c = "/", cur = "def" → cur valid, append to stack = ["abc", "def"], reset cur = ""
        Step 16: c = "/", cur = "" → Slash, cur empty, reset cur = "", stack = ["abc", "def"]


Final Result: "/" + "/".join(stack) = "/abc/def"

'''
