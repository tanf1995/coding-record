exports.keys = "tanfeng";

exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks'
    }
};

exports.middleware = [
    'addSuffix'
]

exports.security = {
    csrf: {
        enable: false
    }
}