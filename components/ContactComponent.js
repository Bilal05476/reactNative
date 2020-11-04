import React, { Component } from 'react';
import { View , Text , StyleSheet } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { MailComposer } from 'expo';
import * as Animatable from 'react-native-animatable';

class Contact extends Component{
    static navigationOptions = {
        title: 'Contact Us'
    };

    sendMail(){
        MailComposer.composeAsync({
            recipients: ['ba4762313@gmail.com'],
            subject: 'Enquiry',
            body: 'To whom it may concern:'
        });
    }

    render(){
        return(
            <View style={styles.container}>
            <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
            <Card title="Contact Information">
                    <Text style={styles.paragraph}>
                        121, Clear Water Bay Road<br /><br />
                        Clear Water Bay, Kowloon<br /><br />
                        HONG KONG<br /><br />
                        Tel: +852 1234 5678<br /><br />
                        Fax: +852 8765 4321<br /><br />
                        Email:confusion@food.net
                    </Text>
                    <Button
                        title="Send Email"
                        buttonStyle={{backgroundColor: "#512DA8"}}
                        icon={<Icon name='envelope-o' type='font-awesome' color='white' />}
                        onPress={this.sendMail}
                    />
                </Card>
            </Animatable.View>  
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    paragraph: {
      margin: 14,
      fontSize: 16,
      color: '#34495e',
    }
});

export default Contact;