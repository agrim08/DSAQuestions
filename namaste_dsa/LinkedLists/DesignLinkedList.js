function Node(val){
    this.val = val;
    this.next = null
}

function LinkedList(){
    this.head = null;
    this.size = 0
}

function AddAtHead(val){
    let newNode = new Node(val)
    newNode.next = this.head
    this.head = newNode
    this.size++
}

function AddToTail(val){
    let newNode = new Node(val)
    
    if(this.head == null){
        this.head = newNode     //empty LL
    }else{
        let curr = this.head
        while(curr.next){
            curr = curr.next
        }
        curr.next = newNode
    }
    this.size++
}

function AddAtIndex(index, val){
    let newNode = new Node(val)
    if(index === 0){
        this.AddAtHead(val)
        return
    }
    else if(index === this.size){
        this.AddToTail(val)
        return
    }else{
        let curr = this.head

        for(let i = 0; i < index - 1; i++){
            curr = curr.next
        }

        newNode.next = curr.next
        curr.next = newNode
    }

    this.size++
}

function DeleteAtIndex(index){
    if(index < 0 || index >= this.size) return

    if(index === 0){ 
        this.head = this.head.next
    }else{
        let curr = this.head
        for(let i = 0; i < index - 1; i++){
            curr = curr.next
        }
        curr.next = curr.next.next
    }
    this.size--
}