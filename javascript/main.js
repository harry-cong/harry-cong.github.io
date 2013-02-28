/**
 * Created with JetBrains WebStorm.
 * User: harry
 * Date: 2/20/13
 * Time: 1:49 AM
 * To change this template use File | Settings | File Templates.
 */

$(document).ready(function() {
    createStoryJS({
        type:		'timeline',
        width:		'900',
        height:		'600',
        source:		'cong_json.json',
        embed_id:	'cong-timeline',
        debug:		true
    });
});