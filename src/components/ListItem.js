import React, { Component } from 'react';
import { CardSection } from './common';
import { Text, 
        TouchableWithoutFeedback, 
        View,
        LayoutAnimation } from 'react-native';
import * as actions from './action';
import { connect } from 'react-redux';

class ListItem extends Component{
    
    // componentWillMount(){
    //     LayoutAnimation.linear();
    // }

    componentWillUpdate(){
        LayoutAnimation.spring();
    }

    renderDescription(){
        if(this.props.expanded)
        {
            return(
                <Text>
                    {this.props.library.item.description}
                </Text>
            )
        }
    }

    render() { 

        const { titleStyle } = styles;
        const { id, title } = this.props.library.item;

        return (
        <TouchableWithoutFeedback
            onPress={() => this.props.selectLibrary(id)}
        >
        <View>
            <CardSection>
                <Text style={titleStyle}>
                {title}
                </Text>
                <Text style = {{flex: 1}}>
                    {this.renderDescription()}
                </Text>
            </CardSection>
        </View>
        </TouchableWithoutFeedback>
        );
    }
    }

const mapStateToProps = (state, ownProps) => {
    const expanded = ownProps.library.item.id === state.selectedLibraryId
    return { expanded }
}
const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15 
    }
}

export default connect(mapStateToProps, actions)(ListItem);
