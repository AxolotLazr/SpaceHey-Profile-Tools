class cassetteTape {
    constructor (cassetteImage, cassetteText, cassetteBottomText, cassetteLink) {
        return ('<div class="cassetteHolder"><div class="cassette"><div class="cassetteScrew"></div><div class="cassetteScrew"></div><div class="cassetteScrew"></div><div class="cassetteScrew"></div><div class="cassetteScrew"></div><div class="cassetteImageHolder"><img class="cassetteImage" src="'
                + cassetteImage +
                '"><div class="cassetteText">'
                + cassetteText +
                '</div><div class="cassetteImageOverlay"></div></div><div class="cassetteInnerHolder"><div class="cassetteInnerInnerHolder"><div class="cassetteRoll"></div><div class="cassetteMiddle"></div><div class="cassetteMiddle"></div><div class="cassetteRoll"></div></div><div class="cassetteInnerOverlay"></div></div><div class="cassetteBottom"></div><div class="cassetteBottom"></div><div class="cassetteBottomText">'
                + cassetteBottomText +
                '</div><a href="'
                + cassetteLink +
                '"></a></div></div>'
                );
    }
}