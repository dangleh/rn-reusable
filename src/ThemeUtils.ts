import { heightPercentageToDP } from './Responsive';
import { Platform, ViewStyle } from 'react-native';

// const GOLDEN_RATIO = 1.62;
// const LINEAR_RATIO = 8;

const isIOS = () => (Platform.OS === 'ios' ? true : false);

class ThemeUtils {
  static danger_red = '#F32013';
  static success_green = '#23C16B';
  static blue_50 = '#bbdefb';
  static blue_100 = '#90caf9';
  static blue_200 = '#64b5f6';
  static blue_300 = '#42a5f5';
  static blue_400 = '#2196f3';
  static blue_500 = '#1e88e5';
  static blue_600 = '#1976d2';
  static blue_grey_50 = '#cfd8dc';
  static grey_50 = '#f5f5f5';
  static grey_100 = '#eeeeee';
  static grey_200 = '#e0e0e0';
  static grey_300 = '#bdbdbd';
  static grey_400 = '#9e9e9e';
  static grey_500 = '#757575';
  static grey_600 = '#616161';
  static red_50 = '#ffcdd2';
  static red_100 = '#ef9a9a';
  static red_200 = '#e57373';
  static red_300 = '#ef5350';
  static red_400 = '#f44336';
  static red_500 = '#e53935';
  static red_600 = '#d32f2f';
  static yellow_50 = '#fff9c4';
  static yellow_100 = '#fff59d';
  static yellow_200 = '#fff176';
  static yellow_300 = '#ffee58';
  static yellow_400 = '#ffeb3b';
  static yellow_500 = '#fdd835';
  static yellow_600 = '#fbc02d';
  static green_50 = '#c8e6c9';
  static green_100 = '#a5d6a7';
  static green_200 = '#81c784';
  static green_300 = '#66bb6a';
  static green_400 = '#4caf50';
  static green_500 = '#43a047';
  static green_600 = '#388e3c';
  static green_700 = '#2e7d32';
  static background_color = this.blue_grey_50;
  static spacing = isIOS() ? 20 : 10;
  static title_1_fs = 48;
  static title_2_fs = 32;
  static title_3_fs = 24;
  static large_fs = 18;
  static regular_fs = 16;
  static small_fs = 14;
  static tiny_fs = 12;
  static regular_line_height = 20;
  static medium_line_height = 24;
  static large_line_height = 28;
  static component_border_radius = 15;
  static component_control_height = 56;
  static component_shadow_color = isIOS() ? this.grey_400 : '#000';
  static android_elevation_1 = 1;
  static android_elevation_2 = 2;
  static android_elevation_4 = 4;
  static android_elevation_8 = 8;
  static android_elevation_16 = 16;
  static android_elevation_24 = 24;
  static button_height = isIOS() ? 48 : 56;
  static small_icon_size = 18;
  static medium_icon_size = 24;
  static large_icon_size = 30;
  static header_height_regular = heightPercentageToDP('20%');
  static header_height_small = heightPercentageToDP('15%');
  static ios_light_shadow_opacity = 0.35;
  static ios_medium_shadow_opacity = 0.5;
  static ios_heavy_shadow_opacity = 0.85;
  static ios_no_shadow_offset = {
    width: 0,
    height: 0,
  };
  //   static fast_image_resize_policy = AppUtils.isIOS()
  //     ? FastImage.resizeMode.contain
  //     : FastImage.resizeMode.center;
  static GOLDER_RATIO = 1.62;
  static backdrop: ViewStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  };
  static mainViewStyle: ViewStyle = {
    borderTopLeftRadius: ThemeUtils.component_border_radius,
    borderTopRightRadius: ThemeUtils.component_border_radius,
    borderTopStartRadius: ThemeUtils.component_border_radius,
    borderTopEndRadius: ThemeUtils.component_border_radius,
    backgroundColor: '#FFF',
  };
  static RELATIVE_SPACING = isIOS() ? this.spacing / 2 : this.spacing;
}

export default ThemeUtils;
