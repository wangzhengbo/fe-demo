var Velocity = require('velocityjs');
const fs = require('fs')
const path = require('path')

const dir = '/Users/wangzhengbo2/dev/GitWork/open-dev-backend/open-dev-backend-web/src/main/webapp/WEB-INF/vm/'

function processDir(dir) {
    const files = fs.readdirSync(dir)
    for (const file of files) {
        if (file.endsWith('.vm')) {
            try {
                Velocity.parse(fs.readFileSync(path.resolve(dir, file), 'utf8'))
            } catch (e) {
                console.error(`Parse failed for ${path.resolve(dir, file)}`)
                throw e
            }
        } else {
            processDir(path.resolve(dir, file))
        }
    }
}

processDir(dir)