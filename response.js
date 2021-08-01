function getBotResponse(inputval) {
    let input = inputval.toLowerCase();
    console.log(input);

    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }
     //my response
    else if(input=="Tell me about the offers"){
        return"there are many offer please check the offer section";
    }
    else if(input=="i love you"){
        return "I love only Pritam"
    }
    else if(input=="Hello pk"){
        return "Kaun hain tu bsdk"
    }
    else if(input=="bhag bsdk"){
        return "chala jaa bsdk"
    }
    else if(input.includes("behenchod")){
       return "tu behenchod";
      }
    else if(input.includes("madarchod")){
       return "tu madarchod";
      }
    else if(input.includes("heta")){
       return "tor maar bl malakar tui malakar nani ba?";
      }
    else if(input.includes("bal")){
       return "bal kara kos thawba khaibe";
      }
    else if(input.includes("bl")){
       return "bl kara kos thawba khaibe";
      }
    else if(input.includes("oy")){
       return "kita oy bhaag";
      }
    else if(input.includes("bsdk")){
       return "tera baap bsdk";
      }
    else if(input.includes("harry bhai kaisa hain")){
       return "harry bhai toh apne ek number hain";
      }
    else if(input.includes("nasheri")){
       return "haha.nasheri ko bol phookna kam kare";
      }
    else if(input.includes("pritam")){
       return "you had taken my boss name";
      }
    else if(input.includes("yahaiyou")){
       return "yahaiyou apna ek number ka mast aadmi hain";
      }
    else if(input.includes("pk")){
       return "pk nahi pritam hu main";
      }

    // Simple responses
    else if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }

   
}