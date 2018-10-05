
enum EmotionNum {
    Happy = 1,
    Sad,
    Angry
}

enum EmotionStr {
    Happy = 'a',
    Sad = 'b',
    Angry = 'c'
}

var myFeeling = EmotionNum.Happy;

export default function show() {
    console.log(`
        * Enumerations:

          Having next definition of enumeration:
              Note we only had to define one value if they are numeric
          ------------------------------------------------------------------------------
          |  enum EmotionNum {
          |      Happy = 1,
          |      Sad,
          |      Angry
          |  }
          |
          |  enum EmotionStr {
          |      Happy = 'a',
          |      Sad = 'b',
          |      Angry = 'c'
          |  }
          ------------------------------------------------------------------------------

          We can use them like next:

          var myFeeling = EmotionNum.Happy;   ---> ${myFeeling}
          EmotionNum.Sad                      ---> ${EmotionNum.Sad}
          EmotionNum.Angry                    ---> ${EmotionNum.Angry}

          EmotionStr.Sad                      ---> ${EmotionStr.Sad}
          EmotionStr.Angry                    ---> ${EmotionStr.Angry}
    `);    
};
