
//implimentation of trie 

class Node{
    constructor() {
        this.children = {}
        this.isWordEnd = false;
    }
}

class Trie{
    constructor(){
        this.root = new Node();
    }

    insert(word){
        let curr = this.root;
        for(let i = 0 ; i < word.length ; i++){
            let charToInsert = word[i];
            if(!(charToInsert in curr.children)){
                curr.children[charToInsert] = new Node();
            }
            curr = curr.children[charToInsert]
        }

        curr.isWordEnd = true;
    }

    contains(word){
        let curr = this.root;
        for(let i = 0 ; i < word.length ; i++){
            let charToFind = word[i];
            if(!(charToFind in curr.children)){
                return false;
            }
            curr = curr.children[charToFind];

        }
          return curr.isWordEnd;
    }

    startsWithPrefix(prefix){
        let curr = this.root;
        for(let i = 0 ; i < prefix.length ; i++){
            let charToFind = prefix[i];
            if(!(charToFind in curr.children)){ 
                return false;
            }
            curr = curr.children[charToFind];
        }
          return true;
    }

    
    //find the words with given prefix
    findWords(prefix){
        let output = [];
        let curr = this.root;
        for(let i = 0 ; i < prefix.length;i++){
            if(curr.children[prefix[i]]){
                curr = curr.children[prefix[i]];
            }else{
                return output;
            }
        }
        this.collectWords(curr,prefix,output);
        return output;
    }

    collectWords(node,prefix,output){
        if(node.isWordEnd){
            output.push(prefix);
        }
        for(let char in node.children){
            this.collectWords(node.children[char],prefix+char,output)
        }
    }
}

let trie = new Trie();
const words = ["JavaScript", "Java", "Python", "Ruby"];
words.forEach(word => trie.insert(word));
console.log(trie.contains("Python")); 
console.log(trie.startsWithPrefix("JavaScript"));