import theme from './theme';

export default {

    evaluateColor: (color, property) => {
        if (theme.colors[color])
            return { [property]: theme.colors[color] };
        else
            return { [property]: color };
    },

    evaluateValue: (value, property) => {
        if (Array.isArray(value)) {
            if (value.length === 1) {
                return { [property]: value[0] }
            }
            if (value.length === 2) {
                return {
                    [property + 'Vertical']: value[0],
                    [property + 'Horizontal']: value[1]
                }
            }
            if (value.length === 3) {
                return {
                    [property + 'Top']: value[0],
                    [property + 'Right']: value[1],
                    [property + 'Bottom']: value[2],
                    [property + 'Left']: value[1],
                }
            }
            if (value.length === 4) {
                return {
                    [property + 'Top']: value[0],
                    [property + 'Right']: value[1],
                    [property + 'Bottom']: value[2],
                    [property + 'Left']: value[3]
                }
            }
        }
        return { [property]: value }
    }

}