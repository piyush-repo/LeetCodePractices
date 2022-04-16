function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const LL1 = {val: 9, next:{val:9, next: {val: 9, next: {val:9, next:{val: 9, next: {val:9, next: {val: 9, next: null}}}}}}};
const LL2 = {val: 9, next:{val:9, next: {val: 9, next: {val: 9, next: null}}}};

function addTwoNumbers(l1, l2) {

    let carry= 0;
    let sum = 0;
    let currentNode = new ListNode();
    let resultLL = currentNode;
    if(l1 || l2) {
        while(l1 || l2 ) {
            let l1_val = 0;
            let l2_val = 0;
            if(l1){
                l1_val = l1.val;
                l1 = l1.next;
            }
            if(l2){
                l2_val = l2.val;
                l2 = l2.next;
            }
            
            sum = l1_val+l2_val;
            if(carry){
                sum += carry;
                carry = 0;
            }
            if(sum > 9) {
                carry = 1;
                sum = sum % 10;
            }
            currentNode.next = new ListNode(sum);
            currentNode = currentNode.next; 
            }
        }
        if(carry){
            currentNode.next = new ListNode(carry); 
        }

        return resultLL.next;
}

value = addTwoNumbers(LL1, LL2);
console.log(value);