# Redis

## Redis with Docker

```
# Start redis server
docker run -p 6379:6379 --name redis-redisjson -d redislabs/rejson:latest

# Access redis cli in docker
docker exec -it <image> redis-cli
```

### RedisJSON commands (with redis-cli)

Inside of `redis-cli`, the following commands are examples to query data and check redis.

_These redis commands are for local development when you want to look directly into redis DB in its natural shell._

```
# Check connection
Ping

# Get all keys
KEYS *

# Get JSON
JSON.GET smite:ql

# Get matches for a player
JSON.GET smite:ql players <accountName> matches

# Clear DB
FLUSHALL
```
