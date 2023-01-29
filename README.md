# twitter_backend

- Backend Twitter Database Designs

# TWEET TABLE

- tweet_id (PRIMARY KEY)
- user_id (FOREIGN KEY referencing USERS table)
- text (text field for the tweet)
- timestamp (datetime field for when the tweet was posted)
- likes (integer field for number of likes)
- retweets (integer field for number of retweets)

# COMMENT TABLE

- comment_id (PRIMARY KEY)
- tweet_id (FOREIGN KEY referencing TWEET table)
- user_id (FOREIGN KEY referencing USERS table)
- text (text field for the comment)
- timestamp (datetime field for when the comment was posted)

# Like/Dislike Table:

- ID (primary key)
- user_id (foreign key)
- tweet_id(foreign key)
- Like/Dislike (boolean)
- Date/Time (datetime)
