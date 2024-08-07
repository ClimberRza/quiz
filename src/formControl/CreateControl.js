export function createControl(config, validation) {
    return {
        ...config,
        touched: false,
        unfocused: true,
        valid: !validation,
        value: '',
        validation
    }
}