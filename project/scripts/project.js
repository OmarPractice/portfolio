$(function my_json()
{

    let arr = [];
	/*var myArray = [
	{
		"first": "John",
		"last": "Doe",
		"age": 39,
		"sex": "male",
		"salary": 70000,
		"registered": true
	}*/
    for (let x of language.result)
    {
        if (!arr.includes(x.Language))
        {
            arr += x.Language;
            //the select a language drop down
            $('#langHTML').append("<option value='" + x.Language + "'>" + x.Language+ "</option>");

        }
    }

    //hiding tables when they're not requested
    $('#langTable').hide();

    //Search guts
    $('#langSearch').click(function ()
    {
        $('#langTableBody tr').remove();
        let l = ($("select#langHTML option:checked").val());
        let p = ($("select#proficiency option:checked").val());

        let x = [];
        x = language.result.filter(
            function (lang)
            {
                switch (p)
                { case 'low':
                    return lang.Language == l && lang.Proficiency == p;
                    break;
                    case 'med':
                    return lang.Language == l && (lang.Proficiency == p || lang.Proficiency == 'low');
                    break;
                    case 'high':
                        return lang.Language == l;
                        break;

                }
            });
        for (let y of x)
        {
            $('#langTable tbody:last-child').append("<tr><td>" + y.Firstname + "</td><td>" + y.Lastname + "</td><td>" +
                y.Language + "</td><td>" + y.Proficiency + "</td><td>" + y.Email + "</td></tr>");
        }
        $('#langTable').show();
    });

    //clear button
    $('#langClear').click(function ()
    {
        $('#langHTML').val('none');
        $('#proficiency').val('low');
        $('#langTable').hide();
    });


    //submit ===
    let deptArr = [];
    for (let x of project.result)
    {
        if (!deptArr.includes(x.AcademicDepartment))
        {
            deptArr += x.AcademicDepartment;
            $('#department').append("<option value='" + x.AcademicDepartment + "'>" + x.AcademicDepartment + "</option>");
        }
    }
    let colArr = [];
    for (let x of project.result)
    {
        if (!colArr.includes(x.AcademicCollege))
        {
            colArr += x.AcademicCollege;
            $('#college').append("<option value='" + x.AcademicCollege + "'>" + x.AcademicCollege + "</option>");
        }
    }
    let countryArr = [];
    for (let x of project.result)
    {
        if (!countryArr.includes(x.Country))
        {
            countryArr += x.Country;
            $('#country').append("<option value='" + x.Country + "'>" + x.Country + "</option>");
        }
    }
    let nameArr = [];
    for (let x of project.result)
    {
        if (!nameArr.includes(x.Lastname))
        {
            nameArr += x.Lastname;
            $('#lName').append("<option value='" + x.Lastname + "'>" + x.Lastname + "</option>");
        }
    }

    //hide like before
    $('#projectTable').hide();

    $('#projectSearch').click(function ()
    {
        $('#projectTableBody tr').remove();
        let d = ($("select#department option:checked").val());
        let c = ($("select#college option:checked").val());
        let co = ($("select#country option:checked").val());
        let l = ($("select#lName option:checked").val());
        let x = [];

        x = project.result.filter(
            function (dept)
            {
                if (d != 'none')
                {
                    if (c != 'none')
                    {
                        if (co != 'none')
                        {
                            if (l != 'none')
                            {
                                return dept.AcademicDepartment == d && dept.AcademicCollege == c && dept.Country == co && dept.Lastname == l;
                            } else
                            {
                                return dept.AcademicDepartment == d && dept.AcademicCollege == c && dept.Country == co;
                            }
                        } else if (l != 'none')
                        {
                            return dept.AcademicDepartment == d && dept.AcademicCollege == c && dept.Lastname == l;
                        } else
                        {
                            return dept.AcademicDepartment == d && dept.AcademicCollege == c;
                        }
                    } else if (co != 'none')
                    {
                        if (l != 'none')
                        {
                            return dept.AcademicDepartment == d && dept.Country == co && dept.Lastname == l;
                        } else
                        {
                            return dept.AcademicDepartment == d && dept.Country == co;
                        }
                    } else if (co == 'none')
                    {
                        if (l != 'none')
                        {
                            return dept.AcademicDepartment == d && dept.Lastname == l;
                        }
                    }
                    return dept.AcademicDepartment == d;
                } else
                {
                    if (c != 'none')
                    {
                        if (co != 'none')
                        {
                            if (l != 'none')
                            {
                                return dept.AcademicCollege == c && dept.Country == co && dept.Lastname == l;
                            } else
                            {
                                return dept.AcademicCollege == c && dept.Country == co;								                            }
                        } else if (l != 'none')
                        {
                            return dept.AcademicCollege == c && dept.Lastname == l;
                        } else
                        {
                            return dept.AcademicCollege == c;
                        }
                    } else
                    {
                        if (co != 'none')
                        {
                            if (l != 'none')
                            {
                                return dept.Country == co && dept.Lastname == l;								                    } else
                            {
                                return dept.Country == co;
                            }
                        } else if (l != 'none')
                        {
                            return dept.Lastname == l;
                        }                    }                }            }        );        console.log(x);


        for (let y of x)
        {
            $('#projectTable tbody:last-child').append("<tr><td>" + y.Firstname + "</td><td>" + y.Lastname + "</td><td>" +
                y.AcademicCollege + "</td><td>" + y.AcademicDepartment + "</td><td>" + y.Country + "</td><td>" + y.Travelled
                + "</td><td>" + y.Country + " - " + y.Collaboration + " - " + y.Location + "</td></tr>");
        }

        $('#projectTable').show();
    });

    $('#projectClear').click(function ()
    {
        $('#department').val('none');
        $('#college').val('none');
        $('#country').val('none');
        $('#lastname').val('none');
        $('#projectTable').hide();
    });


    let termArr = [];
    for (let x of study_abroad.result)
    {
        if (!termArr.includes(x.Term))
        {
            termArr += x.Term;
            $('#term').append("<option value='" + x.Term + "'>" + x.Term + "</option>");
        }
    }
    let programArray = [];
    for (let x of study_abroad.result)
    {
        if (!programArray.includes(x.ProgramName))
        {
			programArray += x.ProgramName;
            $('#program').append("<option value='" + x.ProgramName + "'>" + x.ProgramName + "</option>");
        }
    }
    let countArr = [];
    for (let x of study_abroad.result)
    {
        if (!countArr.includes(x.Country))
        {
			countArr += x.Country;
            $('#country2').append("<option value='" + x.Country + "'>" + x.Country + "</option>");
        }
    }
    let dateArr = [];
    for (let x of study_abroad.result)
    {
        if (!dateArr.includes(x.Dates))
        {
			dateArr += x.Dates;
            $('#date').append("<option value='" + x.Dates + "'>" + x.Dates + "</option>");
        }
    }

    $('#abroadTable').hide();

    //Setting up Search button for Study Abroad article
    $('#abroadSearch').click(function ()
    {
        $('#abroadTableBody tr').remove();
        let t = ($("select#term option:checked").val());
        let p = ($("select#program option:checked").val());
        let c = ($("select#country2 option:checked").val());
        let d = ($("select#date option:checked").val());

        let x = [];
        x = study_abroad.result.filter(
            function (abroad)
            {
                if (t != 'none')
                {
                    if (p != 'none')
                    {
                        if (c != 'none')
                        {
                            if (d != 'none')
                            {
                                return abroad.Term == t && abroad.ProgramName == p && abroad.Country == c && abroad.Dates == d;
                            } else
                            {
                                return abroad.Term == t && abroad.ProgramName == p && abroad.Country == c;
                            }
                        } else if (d != 'none')
                        {
                            return abroad.Term == t && abroad.ProgramName == p && abroad.Dates == d;
                        } else
                        {
                            return abroad.Term == t && abroad.ProgramName == p;
                        }
                    } else if (c != 'none')
                    {
                        if (d != 'none')
                        {
                            return abroad.Term == t && abroad.Country == c && abroad.Dates == d;
                        } else
                        {
                            return abroad.Term == d && abroad.Country == c;
                        }
                    } else if (c == 'none')
                    {
                        if (d != 'none')
                        {
                            return abroad.Term == t && abroad.Dates == d;
                        }
                    }
                    return abroad.Term == t;
                } else
                {
                    if (p != 'none')
                    {
                        if (c != 'none')
                        {
                            if (d != 'none')
                            {
                                return abroad.ProgramName == p && abroad.Country == c && abroad.Dates == d;
                            } else
                            {
                                return abroad.ProgramName == p && abroad.Country == c;
                            }
                        } else if (d != 'none')
                        {
                            return abroad.ProgramName == p && abroad.Dates == d;
                        } else
                        {
                            return abroad.ProgramName == p;
                        }
                    } else
                    {
                        if (c != 'none')
                        {
                            if (d != 'none')
                            {
                                return abroad.Country == c && abroad.Dates == d;
                            } else
                            {
                                return abroad.Country == c;
                            }
                        } else if (d != 'none')
                        {
                            return abroad.Dates == d;
                        }
                    }
                }
            }
        );
        for (let y of x)
        {
            $('#abroadTable tbody:last-child').append("<tr><td>" + y.Term + "</td><td>" + y.ProgramName + "</td><td>"
                + y.Country + "</td><td>" + y.College + "</td><td>" + y.Department + "</td><td>" + y.Dates + "</td><td>"
                + y.Level + "</td><td>" + y.Credits + "</td></tr>");
        }
        $('#abroadTable').show();
    });

    $('#abroadClear').click(function () //clear button
    {
        $('#term').val('none');
        $('#program').val('none');
        $('#country2').val('none');
        $('#date').val('none');
        $('#abroadTable').hide();
    });


});