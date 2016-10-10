var Tip = {
    tips: ["脾氣嘴巴不好，心地再好也不能算好人。",
        "話多不如話少，話少不如話好。",
        "口說好話，心想好意，身行好事，腳走好路。",
        "口說一句好話，如口出蓮花；口說一句壞話，如口吐毒蛇。",
        "一句溫暖的話，就像往別人的身上灑香水，自己會沾上一兩滴。",
        "說人是非，傷人傷己，好話要多說，是非不要提。",
        "靜坐常思已過、閒談莫論人非。",
        "要批評別人時，先想想自己是否完美無缺。",
        "不要把能說話的嘴巴，用在搬弄是非上。",
        "心要常常保持快樂，就必須不把人與人之間的事當成是非。",
        "是非當教育，讚美當警惕。",
        "發脾氣對內對外都是煩惱，對內是指自己生煩惱，對外是指困擾他人。",
        "對人要寬心，講話要細心。",
        "謊言就像一朵盛開的鮮花，外表美麗，生命短暫。",
        "將嘲笑視同啟發，把諷刺當作激勵。",
        "看別人不順眼，是自己修養不夠。",
        "欣賞別人就是莊嚴自己。",
        "心美看什麼都順眼。",
        "愛不是要求對方，而是要由自身的付出。",
        "道德是提昇自我的明燈，不該是呵斥別人的鞭子。",
        "一個人的快樂，不是因為他擁有的多，而是因為他計較得少。",
        "地上種了菜，就不易長草；心中有善，就不易生惡。",
        "生氣，就是拿別人的過錯來懲罰自己。",
        "自己害自己，莫過於亂發脾氣。",
        "我們最大的敵人不是別人，可能是自己。",
        "不要小看自己，因為人有無限的可能。"],
    getRandomTip: function () {
        var index = Math.floor(Math.random() * this.tips.length);
        return this.tips[index];
    }
};