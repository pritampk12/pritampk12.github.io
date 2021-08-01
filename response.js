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
    else if(input=="tell me about the offers"){
        return"there are many offer please check the offer section";
    }
    else if(input=="i love you"){
        return "I love only Pritam"
    }
    else if(input=="Hello pk"){
        return "Kaun hain tu bsdk"
    }
    else if(input.includes("Hello pk")){
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
    else if(input.includes("kola")){
       return "tu kola re kemne chinos? kola mana bhula bhula mana kola tara mana shibam";
      }
    
    else if(input.includes("rakhim")){
       return "chacha apna mast aadmi hainn din mein ande bechta hain raat mein desi daaru pita hain. ";
      }
    else if(input.includes("chacha")){
       return "chacha apna mast aadmi hainn din mein ande bechta hain raat mein desi daaru pita hain. ";
      }
    else if(input.includes("chutiya")){
       return "chutiya nahi boone ka screen se baahar aake maarunga ";
      }
    else if(input.includes("swagata")){
       return "love hain woh apne boss ka ";
      }
    else if(input.includes("friend")){
       return "hum sab kisi na kisi ke dost hain? par sawaal yeh hain k kya woh humara dost hain ";
      }
    else if(input.includes("?")){
       return "apne sawaal ka answer book main dhundo main sirf pritam ke sawal ka ans deta hu ";
      }
    else if(input.includes("fuck")){
       return "fuck off ";
      }
    else if(input.includes("sex")){
       return "gandi cheeze mat likho ashleel larke";
      }
    else if(input.includes("laaru")){
       return "gandi cheeze mat likho ashleel larke";
      }
    else if(input.includes("laaru")){
       return "gandi cheeze mat likho ashleel larke";
      }
    else if(input.includes("bsdk")){
       return "tera baap bsdk";
      }
    else if(input.includes("harry bhai kaisa hain")){
       return "harry bhai toh apne ek number hain";
      }
    else if(input.includes("coding")){
       return "coding sikhna hain toh harry bhai se free main sikho";
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
    else if(input.includes("heart")){
       return "im heart broken";
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