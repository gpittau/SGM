var StreamAdapter = Sigma.Model.HAL.Resource(
	{
		align:'left'
	,	action_align: 'right'
	,	subitems_rel: false
	,	actions_rel: false
	}
	,	{
		getSubitems:function()
			{
			return	this.constructor.subitems_rel
				&&	this.embedded.attr(this.constructor.subitems_rel)
			}
	,	getActions:function()
			{
			return	this.constructor.actions_rel
				&&	this.links.attr(this.constructor.actions_rel)
			}
	,	getAlign:function()
			{
			return	this.constructor.align
			}
	,	getHref:function()
			{
			return	this.links.attr('self.href')
			}
	,	getIcon:function()
			{
			return	this.icon
			||	(
					(this._init!=1)
				&&	this.links.attr('self.icon')
				)
			||	'bolt'
			}
	,	getText:function()
			{
			return	this.attr('description')
			}
	}
)

StreamAdapter(
	'Sigma.Model.HAL.Resource.Stream'
	,	{
			subitems_rel:'posts'
		,	getRoot: function()
			{
				return this.model({_links:{self:{href:'/posts'}}}).Fetch()
			}
		}
	,	{}
)

StreamAdapter(
	'Sigma.Model.HAL.Posts'
	,	{
			subitems_rel:'comments'
		,	actions_rel: 'actions'
	}
	,	{ }
)

StreamAdapter(
	'Sigma.Model.HAL.Comments'
	,	{
		actions_rel: 'actions'
		}
	,	{ }
)