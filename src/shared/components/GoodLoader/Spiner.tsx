import React, {FC} from 'react';
import {Space, Spin} from "antd";


interface SpinerProps {
    size: SpinerSizes
}

export enum SpinerSizes {
    large = 'large',
    small = 'small',
    default = 'default'
}

const Spiner: FC<SpinerProps> = ({size}) => {

    const stylesOfContainer = {
        width:"100%",
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"red"
    }

    return (
        <div style={stylesOfContainer}>
            <Space>
                <Spin size={size}/>
            </Space>
        </div>
    );
};

export default Spiner;