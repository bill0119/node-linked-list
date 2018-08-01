/**
 * Created by bill on 2018/8/1.
 */

"use strict";

const node = require('./node.js');

function linkedList() {
    let length = 0;
    let head = null;

    return {
        insert: function (data) {
            if (!data) return;
            let newNode = new node.Node(data);
            if (head) {
                newNode.next = head;
            }
            head = newNode;
            length++;
        },
        list: function () {
            let result = [];
            let curr = head;
            while (curr) {
                result.push(curr.data);
                curr = curr.next;
            }

            console.log(result);
            return result;
        }
    }
}

let list = new linkedList();
list.insert("123");
list.list();
list.insert(2);
list.list();
list.insert(3);
list.list();


