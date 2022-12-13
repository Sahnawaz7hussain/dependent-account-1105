import React from 'react'
import { Grid, Segment, Header, Button, Icon } from 'semantic-ui-react'

const Read = () => (
    <Grid stackable columns={1}>
        <Grid.Row>
            <Segment>
                <Header as="h3">bigbasket – online grocery store</Header>
                <p>Did you ever imagine that the freshest of fruits and vegetables,
                    top quality pulses and food grains, dairy products and hundreds of branded items could be handpicked and delivered to your home,
                    all at the click of a button? India’s first comprehensive online megastore,
                    bigbasket.com, brings a whopping 20000+ products with more than 1000 brands,
                    to over 4 million happy customers. From household cleaning products to beauty and makeup,
                    bigbasket has everything you need for your daily needs.
                    bigbasket.com is convenience personified We’ve taken away all the stress associated with shopping for daily essentials,
                    and you can now order all your household products and even buy groceries online without travelling long distances or standing in serpentine queues.
                    Add to this the convenience of finding all your requirements at one single source,
                    along with great savings, and you will realize that bigbasket- India’s largest online supermarket,
                    has revolutionized the way India shops for groceries. Online grocery shopping has never been easier.
                    Need things fresh? Whether it’s fruits and vegetables or dairy and meat,
                    we have this covered as well! Get fresh eggs, meat,
                    fish and more online at your convenience.
                    Hassle-free Home Delivery options
                </p>
                
                
                <br />
                <p> We deliver to 25 cities across India and maintain excellent delivery times, ensuring that all your products from groceries to snacks branded foods reach you in time.
                </p>
                <br />
                <p>
                <Icon disabled  color='dark-black' name='circle' /> Slotted Delivery: Pick the most convenient delivery slot to have your grocery delivered. From early morning delivery for early birds, to late-night delivery for people who work the late shift, bigbasket caters to every schedule.
                </p>
                <p>
                <Icon disabled  color='dark-black' name='circle' />    Express Delivery: This super useful service can be availed by customers in cities like Bangalore, Mumbai, Pune, Chennai, Kolkata, Hyderabad and Delhi-NCR in which we deliver your orders to your doorstep in 90 Minutes.
                </p>
                <p>
                <Icon disabled  color='dark-black' name='circle' />   BB Specialty stores: Missed out on buying that essential item from your favorite neighborhood store for tonight’s party? We’ll deliver it for you! From bakery, sweets and meat to flowers and chocolates, we deliver your order in 90 minutes, through a special arrangement with a nearby specialty store, verified by us.
                </p>
                <br />
                <Button>Read More...</Button>
            </Segment>
            
        </Grid.Row>

    </Grid >
)

export default Read