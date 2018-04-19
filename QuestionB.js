//Web Crawler: I wrote a crawler that visits web pages, stores a few keywords in a database, and follows links to other web pages. I noticed that my crawler was wasting a lot of time visiting the same pages over and over, so I made a set, "visited", where I'm storing URLs I've already visited. Now the crawler only visits a URL if it hasn't already been visited. Let’s see if we can make this crawler use less memory. See if you can come up with a data structure better than a hash that just stores the entire URL. How can we trim down the amount of space taken up by "visited"? Explain in words and implement your solution.

// We can use a trie.
// We can make visited a nested hash map where each map has keys of just one character.
// We can store 'google.com' as visited['g']['o']['o']['g']['l']['e']['.']['c']['o']['m']['*'] = True.
// The '*' at the end denotes that is the last entry to avoid confusion of similar prefixes.
// Then we go to add 'google.com/maps' to visited by adding the characters '/maps', because the 'google.com' prefix is already there.
// We can visualize this as a tree, where each node is a character. We can even implement it with node objects and edge pointers instead of nested hash maps.

// reference- Lau, F. (2014, June 2). JUN 2 I'm making a search engine called MillionGazillion from Interview Cake. Retrieved April 15, 2018, from http://luofangyuyx.blogspot.com/2014/06/im-making-search-engine-called.html
