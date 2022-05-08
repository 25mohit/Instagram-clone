class Stack {
    constructor() {
        this.item = []
        this.count = 0
    }

    // Add element to top of the STACK
    push( element ) {
            this.item[this.count] = element
            this.count += 1
            console.log(`${ element } added to ${ this.count }`)
            return this.count - 1
    }
        // Return and remove top element in stack
        // Return UNDEFINED if stack is empty
        pop() {
            if( this.count == 0) return undefined
            let deleteItem = this.items[this.count - 1]
            this.count -= 1
            console.log(`${ deleteItem } removed `)
            return deleteItem
        }
}

const stack = new Stack()

stack.push(100)
stack.push(200)
stack.push(300)

stack.pop()