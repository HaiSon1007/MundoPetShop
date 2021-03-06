import React, { useEffect, useState } from 'react'
import {
  View, Text, Image, Dimensions, FlatList, StyleSheet, TouchableOpacity,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import ICONS from '../../../../assets/icons'
import IMAGES from '../../../../assets/images'
import { COLORS } from '../../../../assets/styles'
// import { TouchableOpacity } from 'react-native-gesture-handler'

const { width, height } = Dimensions.get('window')
const rate = width / 375

const ListItemComponent = (props) => {
  const { data } = props
  return (
    <View style={{
      width: 345 * rate,
      height: 90 * rate,
      flexDirection: 'row',
      backgroundColor: COLORS.WHITE,
      borderRadius: 10 * rate,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10 * rate,
      marginBottom: 15 * rate,
    }}
    >
      <TouchableOpacity>
        <FastImage
          source={data.imageSer1}
          style={{
            height: 72 * rate,
            width: 85 * rate,
            borderRadius: 10 * rate,
          }}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <View style={{ flex: 1, paddingLeft: 15 * rate }}>
        <TouchableOpacity>
          <Text style={{
            fontSize: 14 * rate,
            marginVertical: 5 * rate,
          }}
          >
            {data.nameSer}
          </Text>
        </TouchableOpacity>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 6 * rate,
        }}
        >
          <Text style={{ fontSize: 14 * rate, color: COLORS.ORANGE }}>
            {data.priceSer}
            đ
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.GRAY,
              width: 40 * rate,
              height: 40 * rate,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5 * rate,
            }}
          >
            <FastImage source={ICONS.Schedule} style={{ height: 20 * rate, width: 20 * rate }} resizeMode="contain" />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}
export default ListItemComponent
