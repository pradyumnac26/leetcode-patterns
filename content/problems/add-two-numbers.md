---
title: Add Two Numbers
difficulty: Medium
pattern: linked-list
subpattern: linked-list
order: 0
clarifyingQuestions:
    - Can the 2 linked lists be of different lengths ? 
    - So if the final sum creates a extra carry digit, we should append a new node right ? for example 999 + 1 = 1000
    - Are leading zeros allowed? Can the linked list end with zeros that would become zeros at the beginning of the actual number after reversing? 
bruteSummary: Travserse l1 build the actual number num1, traverse l2 build the actual number num2, and then add both of them and then convert the sum back into linked list in the reverse order.
bruteTime: O(m+n)
bruteSpace: O(m+n)
optimalSummary: Traverse both linked lists from left to right, add corresponding digits and carry, create a node with `sum % 10`, update `carry = sum // 10`, and continue until both lists and the carry are exhausted. Time complexity is linear because we traverse both linked lists once, and the loop runs until the bigger list is exhausted.
optimalTime: O(max(m,n))
optimalSpace: O(1) auxiliary space (O(max(m,n)) including the output linked list)
pitfalls:
  - Stopping the loop when one list ends instead of continuing with the longer list.
  - Forgetting to treat a missing node as 0 after one list is exhausted.
---
