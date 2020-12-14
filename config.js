const config = {
    "ownerID": "727372765782343701", //kendi IDınızı yazınız
    "admins": ["727372765782343701"],
    "support": ["727372765782343701"],
    "token" : ["NzMwNzkwNzk5Mjg5MDkwMTc5.Xwcn9w.H2-_Kek5LJ-ifCrS-ln_J0CwPEw"], //botunuzun tokenini yazınız
    "dashboard" : {
      "oauthSecret": "bmgG7OnkkR2bemKppto3z_Y_V0Xc-P-o", //botunuzun secretini yazınız
      "callbackURL": `https://nl-neonlight.glitch.me/callback`, //site URLnizi yazınız /callback kısmını silmeyiniz!
      "sessionSecret": "super-secret-session-thing", //kalsın
      "domain": "https://nl-neonlight.glitch.me/", //site URLnizi yazınız!
          "port": process.env.PORT
    }
  };
  
  module.exports = config;