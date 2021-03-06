var menu = [
				/*{ element_expand:"Q1_expande", element_close:"Q1_close", element_content:"Q1" },
				{ element_expand:"Q2_expande", element_close:"Q2_close", element_content:"Q2" },*/
				{ element_expand:"Q3_expande", element_close:"Q3_close", element_content:"Q3" },
				{ element_expand:"Q4_expande", element_close:"Q4_close", element_content:"Q4" },
				{ element_expand:"Q5_expande", element_close:"Q5_close", element_content:"Q5" },
				{ element_expand:"Q6_expande", element_close:"Q6_close", element_content:"Q6" },
				{ element_expand:"Q7_expande", element_close:"Q7_close", element_content:"Q7" },
				{ element_expand:"Q8_expande", element_close:"Q8_close", element_content:"Q8" },
				{ element_expand:"Q9_expande", element_close:"Q9_close", element_content:"Q9" },
				{ element_expand:"Q10_expande", element_close:"Q10_close", element_content:"Q10" },
				{ element_expand:"Q11_expande", element_close:"Q11_close", element_content:"Q11" },
				{ element_expand:"Q12_expande", element_close:"Q12_close", element_content:"Q12" },
				{ element_expand:"Q13_expande", element_close:"Q13_close", element_content:"Q13" },
				{ element_expand:"Q14_expande", element_close:"Q14_close", element_content:"Q14" },
				{ element_expand:"Q15_expande", element_close:"Q15_close", element_content:"Q15" },
				{ element_expand:"moreInfo1_expande", element_close:"moreInfo1_close", element_content:"moreInfo1" },
				{ element_expand:"moreInfo2_expande", element_close:"moreInfo2_close", element_content:"moreInfo2" },
				{ element_expand:"moreInfo3_expande", element_close:"moreInfo3_close", element_content:"moreInfo3" },
				{ element_expand:"moreInfo4_expande", element_close:"moreInfo4_close", element_content:"moreInfo4" },
				{ element_expand:"myNetwork1_expande", element_close:"myNetwork1_close", element_content:"myNetwork1" },
				{ element_expand:"myNetwork2_expande", element_close:"myNetwork2_close", element_content:"myNetwork2" },
				{ element_expand:"myNetwork3_expande", element_close:"myNetwork3_close", element_content:"myNetwork3" },
				{ element_expand:"myNetwork4_expande", element_close:"myNetwork4_close", element_content:"myNetwork4" },
				{ element_expand:"myNetwork1a_expande", element_close:"myNetwork1a_close", element_content:"myNetwork1a" },
				{ element_expand:"myNetwork2a_expande", element_close:"myNetwork2a_close", element_content:"myNetwork2a" }
			];

// menuIndex : starts with 0;
function toggleMenu(menuIndex)
{	
	if ( document.getElementById(menu[menuIndex].element_expand).style.display == 'none' )
	{
		document.getElementById(menu[menuIndex].element_expand).style.display  = 'block';
		document.getElementById(menu[menuIndex].element_close).style.display  = 'none';
		document.getElementById(menu[menuIndex].element_content).style.display  = 'none';
	}
	else
	{
		document.getElementById(menu[menuIndex].element_expand).style.display  = 'none';
		document.getElementById(menu[menuIndex].element_close).style.display  = 'block';
		document.getElementById(menu[menuIndex].element_content).style.display  = 'block';
	}	
	closeAllOtherMenus(menuIndex);
}

function closeAllOtherMenus(menuIndex)
{
	for ( var i=0; i<menu.length; i++ )
	{
		if ( menuIndex != i )
		{
			document.getElementById(menu[i].element_expand).style.display  = 'block';
			document.getElementById(menu[i].element_close).style.display  = 'none';
			document.getElementById(menu[i].element_content).style.display  = 'none';
		}
	}
}
