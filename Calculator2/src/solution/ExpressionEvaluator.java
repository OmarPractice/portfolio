package solution;

import java.util.Scanner;
import java.util.Stack;
import java.util.regex.Pattern;
import java.util.EmptyStackException;

// TODO: Auto-generated Javadoc
/**
 * The Class ExpressionEvaluator.
 *
 * @author orn
 * @version 1
 */
public class ExpressionEvaluator
{

    /** The Constant UNSIGNED_DOUBLE. */
    public static final Pattern UNSIGNED_DOUBLE =
        Pattern.compile("((\\d+\\.?\\d*)|(\\.\\d+))([Ee][-+]?\\d+)?.*?");
    
    /** The Constant CHARACTER. */
    public static final Pattern CHARACTER = Pattern.compile("\\S.*?");



    /**
     * This method takes the infix expression string as an argument. 
     * 
     * 
     * @param expression
     *            The infix expression.
     * @return the postfix expression.
     */
    public String toPostfix(String expression)
    {
        // ... other local variables
        Scanner input = new Scanner(expression);
        String next;
        char symbol;
        String postfixExpression = "";
        Stack<Character> stack = new Stack<Character>();

        while (input.hasNext())
        {
            if (input.hasNext(UNSIGNED_DOUBLE))
            {
                next = input.findInLine(UNSIGNED_DOUBLE);
                //note don't use the stupid "/t" thing
                postfixExpression += next + " ";
            }
            else if (input.hasNext(CHARACTER))
            {
                next = input.findInLine(CHARACTER);
                symbol = next.charAt(0);
                if (symbol == '(')
                {
                    stack.push(symbol);
                }

                else if (symbol == '+' || symbol == '-'
                    || symbol == '*' || symbol == '/') 
                {
                    while (!stack.isEmpty() 
                        && 
                        stack.peek() != '(' 
                        && 
                        (helper(stack.peek())) 
                        >= helper(symbol)) 
                    {

                        postfixExpression += stack.pop() + " "; 
                    }
                    stack.push(symbol); 
                }
                else if (symbol == ')')
                {
                    while (!stack.isEmpty() && stack.peek() != '(')
                    {

                        postfixExpression += stack.pop() + " "; 

                    }

                    stack.pop(); 
                }

                else
                {
                    //else there is an error
                    //only exception that's working
                    throw new EmptyStackException();
                }
            }
        }
        while (!stack.isEmpty())
        {

            postfixExpression += stack.pop() + " ";
        }
        input.close();
        return postfixExpression;
    }

    /**
     * Evaluates a postfix expression and returns the result.
     * 
     * @param postfixExpression
     *            The postfix expression.
     * @return The result of the expression.
     */
    public double evaluate(String postfixExpression)
    {
        // other local variables you may need
        Scanner input = new Scanner(postfixExpression);
        String next;
        char operator;
        double answer = Double.NaN;
        Stack<Double> stack = new Stack<Double>();

        while (input.hasNext())
        {
            if (input.hasNext(UNSIGNED_DOUBLE))
            {
                next = input.findInLine(UNSIGNED_DOUBLE);
                //read and push
                double n = Double.parseDouble(next);
                stack.push(n);

            }
            else
            {
                next = input.findInLine(CHARACTER);
                operator = next.charAt(0);

                // TODO: do what you want to with an operator
                // such as *, /, +, -

                if (operator == '*' && stack.size() > 1)
                {
                    double right = stack.pop();
                    double left = stack.pop();
                    answer = left * right;
                    stack.push(answer);
                }
                else if (operator == '/' && stack.size() > 1)
                {
                    double right = stack.pop();
                    double left = stack.pop();
                    answer = left / right;
                    stack.push(answer);
                }
                else if (operator == '-' && stack.size() > 1)
                {
                    double right = stack.pop();
                    double left = stack.pop();
                    answer = left - right;
                    stack.push(answer);
                }
                else if (operator == '+' && stack.size() > 1)
                {
                    double right = stack.pop();
                    double left = stack.pop();
                    answer = left + right;
                    stack.push(answer);
                }

            }
        }
        input.close();
        return answer = stack.pop();

    }



    /**
     * Helper.
     *
     * @param c the c
     * @return the int
     */
    public int helper(Character c)
    {
        //multi or divis is the highest

        if (c == '*' || c == '/')
        {
            return 100;
        }
        else if (c == '+' || c == '-')
        {
            return 1;
        }
        else
        {
            return 0;

        }

    }

}
