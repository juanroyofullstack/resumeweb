let Captcha;
!function(t1) {
    const o2 = [
        "A",
        "B",
        "C",
        "E",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "W",
        "X",
        "Y",
        "Z"
    ], e1 = [
        "a",
        "b",
        "c",
        "e",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "m",
        "n",
        "p",
        "q",
        "r",
        "s",
        "t",
        "w",
        "x",
        "y",
        "z"
    ], n1 = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
    ];
    (Captcha = function(r, a) {
        const h = this;
        h.element = r, h.options = t1.extend(!0, {
            length: 4,
            width: 100,
            height: 40,
            font: "bold 23px Arial",
            resourceType: "aA0",
            resourceExtra: [],
            clickRefresh: !0,
            autoRefresh: !0,
            caseSensitive: !1
        }, a);
        let s = [];
        h.options.resourceType.length > 0 && (-1 !== h.options.resourceType.indexOf("A") && (s = s.concat(o2)), -1 !== h.options.resourceType.indexOf("a") && (s = s.concat(e1)), -1 !== h.options.resourceType.indexOf("0") && (s = s.concat(n1))), h.options.resourceExtra.length > 0 && (s = s.concat(h.options.resourceExtra)), 0 === s.length && (s = o2.concat(e1).concat(n1)), h.resource = s, h.options.clickRefresh && h.element.on("click", function() {
            h.refresh();
        }), h.refresh();
    }).prototype.refresh = function() {
        const t = this, o = t.element[0];
        o.width = t.options.width, o.height = t.options.height;
        const e = o.getContext("2d");
        e.font = t.options.font;
        const n = t.randomCode(), r = o.width - e.measureText(n.join("")).width - 40, a = Math.floor(r / n.length);
        let h = 10;
        for(let r1 = 0; r1 < n.length; r1++){
            const s = 30 * Math.random() * Math.PI / 180, i = h, c = o.height / 2 + 10 * Math.random();
            e.translate(i, c), e.rotate(s), e.fillStyle = t.randomColor(), e.fillText(n[r1], 0, 0), e.rotate(-s), e.translate(-i, -c), h += e.measureText(n[r1]).width + a + Math.floor(5 * Math.random());
        }
        t.code = n;
        const s = n.length * Math.round(Math.random() + 1) + 3;
        for(let o1 = 0; o1 < s; o1++){
            e.strokeStyle = t.randomColor(!0), e.beginPath(), e.moveTo(Math.random() * t.options.width, Math.random() * t.options.height), e.lineTo(Math.random() * t.options.width, Math.random() * t.options.height);
            const o1 = Math.random() * t.options.width, n = Math.random() * t.options.height;
            e.moveTo(o1, n), e.lineTo(o1 + 1, n + 1), e.stroke();
        }
    }, Captcha.prototype.getCode = function() {
        return this.code.join("");
    }, Captcha.prototype.valid = function(t) {
        const o = this;
        let e = !1;
        return !(e = o.options.caseSensitive ? t === o.getCode() : t.toLowerCase() === o.getCode().toLowerCase()) && o.options.autoRefresh && o.refresh(), e;
    }, Captcha.prototype.randomCode = function() {
        const t = this, o = [], e = t.resource.length;
        for(let n = 0; n < t.options.length; n++){
            const n = t.resource[Math.floor(Math.random() * e)];
            o.push(n);
        }
        return o;
    }, Captcha.prototype.randomColor = function(t) {
        const o = Math.round(255 * Math.random()), e = Math.round(255 * Math.random()), n = Math.round(255 * Math.random());
        return t ? "rgb(" + o + "," + e + "," + n + "," + Math.random() + ")" : "rgb(" + o + "," + e + "," + n + ")";
    };
}($);

//# sourceMappingURL=index.769def7f.js.map
