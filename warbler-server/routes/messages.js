const express = require('express');
const router = express.Router({mergeParams: true});

const {createMessage, geteMessage, removeMessage} = require('../handlers/messages');

router.route('/').post(createMessage);

router.route('/:message_id').get(geteMessage).delete(removeMessage);

module.exports = router;