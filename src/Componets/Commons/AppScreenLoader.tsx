import * as React from 'react';
import ProgressLoader from 'rn-progress-loader';
import { If, Then } from 'react-if';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { connect } from 'react-redux';

type AppLoaderProps = {
    hudColor?: string;
    color?: string;
    isHUD?: boolean;
    isModel?: boolean;
    isLoading?: boolean;
}

const AppScreenLoader = (props: AppLoaderProps) => {
    const {hudColor = Colors.black, color = Colors.white, isHUD = true, isModel = true, isLoading = false} = props;
    return (
        <If condition={isLoading}>
            <Then>
                <ProgressLoader
                    visible={true}
                    isModel={isModel}
                    isHud={isHUD}
                    hudColor={hudColor}
                    color={color}/>
            </Then>
            </If>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.appScreenLoader.isLoading,
    }
}
export default connect(mapStateToProps)(AppScreenLoader);