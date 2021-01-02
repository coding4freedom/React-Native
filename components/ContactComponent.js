import React, { Component } from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card} from 'react-native-elements';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        

        return (
            <ScrollView> 
                <Card 
                    title={"Contact Information"}
                    wrapperStyle={{margin: 20}}>

                    <Text>
                        1 Nucamp Way
                    </Text>
                    <Text style={{marginBottom: 10}}>
                        Seattle, WA 98001{'\n'}                       
                        U.S.A.
                    </Text>
                    <Text>
                        Phone: 1-206-555-1234{"\n"}
                        Email: campsites@nucamp.co
                    </Text>

                </Card>
            </ScrollView>
        );
    }
}
export default Contact;