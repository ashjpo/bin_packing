/**
 * @author: 夏2同学
 * @time: 2020年7月10日20:52:14
 * @version: v0.0.1
 * @basic：https://www.jq22.com/jquery-info1968
 * @old_author:Arron.y
 * 优化的点：
 * 	1. 原来加载的时候有一瞬间的左侧晃动（已干掉）
 * 	2. 增加初始化位置，不在只能单一的初始化第一个
 * 	3. 修复了多点几次的时候，弹不出来的情况
 * 			(错误原因：hide的时候没有将data.flag 设置为false)
 */

(function($) {
	$.fn.foldpanel = function(options) {

		var _init = options.init || false,
			_initIndex = options.init_index || 0;
		_time = options.time || 300,
			_dbclose = options.dbclose && true,
			_flag = false;
		// return 
		this.each(function() {
			var $dts = $(this).children('dt');
			$dts.click(onClick);
			$dts.each(resetFalse);

			//初始化
			if (_init) {
				$dts.eq(_initIndex).next().slideDown(_time);
				$dts.eq(_initIndex).data('flag', true);
			}

		});

		function onClick() {
			_this = $(this);
			_this.siblings('dt').each(hide);


			if (_dbclose) {
				if (_this.data('flag')) {
					_this.next().slideUp(_time);
					_this.data('flag', false);
				} else {
					_this.next().slideDown(_time);
					_this.data('flag', true);
				}
				return;
			} else {
				_this.next().slideDown(_time);
			}
		}

		function hide() {
			$(this).next().slideUp(_time);
			$(this).data('flag', false);
		}

		function resetFalse() {
			_this = $(this);
			_this.data('flag', false);
		}
	}
})(jQuery);
