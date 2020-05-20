var Velocity = require('velocityjs');

console.log(Velocity.render(`
#set($ruleOptions = [
  {"value": '', "label": '不配置条件'},
  {"value": '>', "label": '大于'},
  {"value": '>=', "label": '大于等于'},
  {"value": '<', "label": '小于'},
  {"value": '<=', "label": '小于等于'},
  {"value": '==', "label": '等于'},
  {"value": '!=', "label": '不等于'},
  {"value": 'in', "label": '包含'},
  {"value": 'match', "label": '匹配'}
])

#macro(componentSlotValue $type $label $list $dataItem)
    <div class="$!{type}-item">
        <select name="$type" class="chosen-select" placeholder="请选择\${label}" data-options="{disable_search:true}">
            <option value="" style="display:none" selected>请选择\${label}</option>
            #foreach($!{option} in $!{list})
                <option value="$!{option.value}" #if($!{option.text} == $!{dataItem.component})selected#end>$!{option.text}</option>
            #end
        </select>
        <select name="\${type}Rule" class="chosen-select" placeholder="请选择条件" data-options="{disable_search:true}"
                onchange="$!{JS_NS}.run('js/taskBot.onRuleChange', [this, '\${type}RuleValue'])">
            #foreach($ruleOption in $ruleOptions)
                <option value="$ruleOption.value" #if($!{ruleOption.value} == $!{dataItem.condition})selected#end>$ruleOption.label</option>
            #end
        </select>
        <input name="\${type}RuleValue" value="$!{dataItem.value}" type="text" class="form-control" #if($!{dataItem.condition} == "")disabled#end validate/>
    </div>
#end

<div>$message</div>
#macro(hello $msg)
  hello~~$msg!
#end
#hello($message)
#hello(1)
#hello('aaa')
`,
{
    message: 'Hello, velocityjs!'
}))

console.log(Velocity.render(`
<div>$message</div>
#macro(hello $msg)
  hello~~$msg!
#end
#hello($message)
#hello(1)
#hello('aaa')
#world(3)
`,
{
    message: 'Hello, velocityjs!'
},
{
    world() {
        return this.eval('world!')
    }
}))
