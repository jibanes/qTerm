# qTerm

This is a chrome extension allowing you to connect and execute commands to kdb+ over a websocket connection.
The command passed from the browser is simply executed on the server.

1. Download all files to a directory.

  ```   
  user@host:/home/user/projects$ ls qTerm/
  background.js  icon.png  manifest.json  popup.html  qServer.q  qTerm.gif  README.md  style.css
  ```
  
2. Start the q script.

  ```
  user@host:/home/user/projects/qTerm$ q qServer.q
  KDB+ 3.4 2016.06.14 Copyright (C) 1993-2016 Kx Systems
  l32/ 4()core 5898MB user host 127.0.1.1 NONEXPIRE  

  Welcome to kdb+ 32bit edition
  For support please see http://groups.google.com/d/forum/personal-kdbplus
  Tutorials can be found at http://code.kx.com/wiki/Tutorials
  To exit, type \\
  To remove this startup msg, edit q.q
  q)\p
  50667i
  q)
  ```

3. Import the extension in chrome.
  https://developer.chrome.com/extensions/getstarted

4. Enjoy!

    ![alt tag](https://github.com/Cobher/qTerm/blob/master/qTerm.gif)
