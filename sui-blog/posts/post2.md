# Post 2
Feb 15, 2019

Also guys I'm on Windows POS Ready 2009 not XP.
## Re-write
Hey guys! I decided (besides the renderer), so I have hot new features to show.
### Console: Standalone Window + Customization
In the mod.xml file (in the working directory, normally c:\sui\{version}\) you can set a custom icon, as well as change the Engine and ClientName texts without modifying the code.

! [Basic Console][/res/SUIBeta-1.png]

This picture doesn't show the customization, but its there.
### Console: Version Console 
Now in engine.xml, you can set the version information for every SourceUI.Version.* string.

! [Versions][/res/SUIBeta-2.png]
### Console: Stability Improvements
The Engine used to call a new roughly 1,024 byte sector of memory to add to the error stack per incorrect commands. This was used back in the alpha to control error printing. Now, it calls for the length of the command array, and per fail of a command, 1 is added to that integer, and once it hits the end and the error count is the checked, and if its equal or greater than the length, it reports Invalid Command.
! [Error] [/res/SUIBeta-3.png]

## New Stuff
I'm currently trying to refix some of the older stuff, but I will work on that later.  
