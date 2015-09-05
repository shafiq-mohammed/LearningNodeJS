/*
@author Shafiq Mohammed
@@date 09-05-2015
How modules work - Sharing modules.
*/

//The below should print "transformers"
require('./Shafiq');

//The below would be expected to print nothing, but it prints transformers.
//That is because in Node, modules are shared by default.
//Which is useful, because if you make a chat app, everyone is looking at the
//same module/resource which would be the chat screen.
require('./Michael');
