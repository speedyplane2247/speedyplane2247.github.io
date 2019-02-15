# Post 3
Feb 15, 2019
## Removal of Error Messages
I keep getting engine errors when using console and entering an invalid things {sui_engine_math_invalid} & {sui_engine_phys_invalid} into console. It seems to be failing on some of them, so I think it's better to just omit the invalid thing.
## DirectX Testing
You can now test out the renderer by typing "showrender". For some reason, (when looking at C:\sui\1121\engine.log) it's throwing thousands of {sui_logic_textlowercase} error when the whole text isn't lowercased as it keeps checking the contents of the console, and executed them in a sandbox for faster execution. What is does is create a DirectX object to test the failsafe. There are a few outputs, and I'll get into those later.
## New Commands
There are 3 new commands with this update.
### debugdx
"debugdx" disables the DirectX by calling a {sui_render_invalidmap} exeption during the creation of the object. It forces everything DirectX related to crash before creation. Server operators might want to force this in their client_engine.xml file to prevent cheating on DirectX.
### nodebugdx
"nodebugdx" undos "debugdx". This doesn't force it to run in DX mode, but simply re-enables it. 
### showrender
"showrender" creates a new {sui_render_WindowObject} object with the map_suicrashDXtest.smf.
## Media

Here is some media of me testing out the different functions https://youtu.be/tn9UZVsLpp0
