function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const LL1 = {val: 9, next:{val:9, next: {val: 9, next: {val:9, next:{val: 9, next: {val:9, next: {val: 9, next: null}}}}}}};
const LL2 = {val: 9, next:{val:9, next: {val: 9, next: {val: 9, next: null}}}};

function addTwoNumbersWithRecurssion(l1, l2, carryOver=0){

    let carry= carryOver;
    let sum = 0;
    
    let resultLL = null;
        if(l1 || l2) {
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
            resultLL  = new ListNode(sum);
            resultLL.next = addTwoNumbersWithRecurssion(l1, l2, carry);
            }
            else if (carry) {
                resultLL = new ListNode(1);
                resultLL.next = null;
            }
        return resultLL;
}

value = addTwoNumbersWithRecurssion(LL1, LL2);
console.log(value);