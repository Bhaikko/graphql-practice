export default {
    count: {
        subscribe(parent, args, { pubsub }, info) {
            let count = 0;

            setInterval(() => {
                count++;
                pubsub.publish('count', {
                    count: count
                });  // publishes data through the channel when this is called
            }, 1000);

            return pubsub.asyncIterator('count');   // Creates channel for socket
        }
    }
}